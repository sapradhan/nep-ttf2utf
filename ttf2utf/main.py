#!/usr/bin/python
# encoding: utf-8
'''
ttf2utf.main -- ttf to utf converter

ttf2utf.main converts text typed in ttf fonts like Preeti, PCS Nepali to Unicode.
Supports selection of fonts

It defines classes_and_methods

@author:     sapradhan
        
@copyright:  2013. Creative commons
        
@license:    Apache License 2.0

@contact:    nepalitankan.blogspot.com
@deffield    updated: 2013-11-30
'''

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from argparse import ArgumentParser, RawDescriptionHelpFormatter
from ttf2utf import rules_loader, converter
import argparse

__all__ = []
__version__ = '0.1-beta'
__date__ = '2013-11-17'
__updated__ = '2013-11-30'

DEBUG = 0
TESTRUN = 0
PROFILE = 0

class CLIError(Exception):
    '''Generic exception to raise and log different fatal errors.'''
    def __init__(self, msg):
        super(CLIError).__init__(type(self))
        self.msg = "E: %s" % msg
    def __str__(self):
        return self.msg
    def __unicode__(self):
        return self.msg

def main(argv=None): # IGNORE:C0111
    '''Command line options.'''
    
    if argv is None:
        argv = sys.argv
    else:
        sys.argv.extend(argv)

    program_name = os.path.basename(sys.argv[0])
    program_version = "v%s" % __version__
    program_build_date = str(__updated__)
    program_version_message = '%%(prog)s %s (%s)' % (program_version, program_build_date)
    program_shortdesc = __import__('__main__').__doc__.split("\n")[1]
    program_license = '''%s

  Created by sapradhan on %s.
  
  Licensed under the Apache License 2.0
  http://www.apache.org/licenses/LICENSE-2.0
  
  Distributed on an "AS IS" basis without warranties
  or conditions of any kind, either express or implied.

USAGE
''' % (program_shortdesc, str(__date__))

    try:
        all_rules = rules_loader.load_rules('rules/')
        # Setup argument parser
        parser = ArgumentParser(description=program_license, formatter_class=RawDescriptionHelpFormatter)
        parser.add_argument("-v", "--verbose", dest="verbose", action="count", help="set verbosity level [default: %(default)s]")
        parser.add_argument('-V', '--version', action='version', version=program_version_message)
        parser.add_argument('-f', '--font', dest='font', help='Font selection', choices=all_rules.keys(), default='preeti')
        parser.add_argument('input', help='input file', type=argparse.FileType('r') )
        parser.add_argument('output', help='output file', type=argparse.FileType(mode='w') )
#         parser.add_argument(dest="paths", help="paths to folder(s) with source file(s) [default: %(default)s]", metavar="path", nargs='1')
        
        # Process arguments
        args = parser.parse_args()
        
        verbose = args.verbose
        in_file = args.input
        out_file = args.output
        font = args.font
        
        if verbose != None and verbose > 0:
            print("Verbose mode on %d" % verbose)
            
        try:
            converter.convert(all_rules[font], in_file, out_file)
        finally:            
            out_file.close()
            in_file.close()
        
        return 0
    except KeyboardInterrupt:
        ### handle keyboard interrupt ###
        return 0
    except Exception as e:
        if DEBUG or TESTRUN:
            raise(e)
        indent = len(program_name) * " "
        sys.stderr.write(program_name + ": " + repr(e) + "\n")
        sys.stderr.write(indent + "  for help use --help")
        return 2

if __name__ == "__main__":
    if DEBUG:
        sys.argv.append("-h")
        sys.argv.append("-v")
    if TESTRUN:
        import doctest
        doctest.testmod()
    if PROFILE:
        import cProfile
        import pstats
        profile_filename = 'ttf2utf.main_profile.txt'
        cProfile.run('main()', profile_filename)
        statsfile = open("profile_stats.txt", "wb")
        p = pstats.Stats(profile_filename, stream=statsfile)
        stats = p.strip_dirs().sort_stats('cumulative')
        stats.print_stats()
        statsfile.close()
        sys.exit(0)
    sys.exit(main())