/**
 * @file
 *
 * @brief
 *
 * @copyright BSD License (see doc/LICENSE.md or http://www.libelektra.org)
 */

#include "parser.hpp"

#include <fstream>
#include <iostream>

using namespace std;

ostream & operator<< (ostream & os, parse_t & p)
{
	os << "/*This is an auto-generated file generated by exporterrors. Do not modify it.*/" << endl
	   << endl
	   << "#ifndef KDBERROR_TRANSLATION_H" << endl
	   << "#define KDBERROR_TRANSLATION_H" << endl
	   << endl
	   << endl
	   << "static const char *description_strings[] = {" << endl;

	for (size_t i = 1; i < p.size (); ++i)
	{
		if (p[i]["unused"] == "yes")
		{
			continue;
		}

		if (i != 1) os << "," << endl;

		os << "	QT_TRANSLATE_NOOP(" << p[i]["description"] << ")";
	}

	os << endl << "};" << endl << endl;

	os << "#endif" << endl;
	return os;
}

int main (int argc, char ** argv) try
{
	if (argc == 1 || argc > 3)
	{
		cerr << "Usage " << argv[0] << " infile [outfile]" << endl;
		return 1;
	}

	string infile = argv[1];

	parse_t result = parse (infile);

	if (argc == 3)
	{
		ofstream fout (argv[2]);
		if (!fout.is_open ())
		{
			cerr << "Could not open output file" << endl;
			return 1;
		}
		fout << result;
	}
	else
	{
		cout << result;
	}
}
catch (parse_error const & e)
{
	cerr << "The line " << e.linenr << " caused following parse error: " << e.info << endl;
	return 2;
}
