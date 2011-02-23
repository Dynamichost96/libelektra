/***************************************************************************
                serial_bin.c  -  Low level objects serialization etc
                             -------------------
    begin                : Sun Mar 12 2006
    copyright            : (C) 2006 by Yannick Lecaillez, Avi Alkalay
    email                : sizon5@gmail.com, avi@unix.sh
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the BSD License (revised).                      *
 *                                                                         *
 ***************************************************************************/


/* Subversion stuff

$Id$

*/

#ifdef HAVE_KDBCONFIG_H
#include "kdbconfig.h"
#endif

#include <assert.h>

#ifdef HAVE_STDLIB_H
#include <stdlib.h>
#endif
#ifdef HAVE_STRING_H
#include <string.h>
#endif
#if HAVE_UNISTD_H
#include <unistd.h>
#endif


ssize_t serialInt_getSize(const void *pInt)
{
	return sizeof(int);
}

ssize_t serialInt_serialize(const void *pInt, void *pBuffer)
{
	size_t	size;

	assert(pInt != NULL);
	assert(pBuffer != NULL);
	
	size = serialInt_getSize(pInt);
	memcpy(pBuffer, pInt, size);

	return size;
}

ssize_t serialInt_unserialize(const void *pBuffer, void *pInt)
{
	size_t size;

	assert(pBuffer != NULL);
	assert(pInt != NULL);
	
	size = serialInt_getSize(pInt);
	memcpy(pInt, pBuffer, size);

	return size;
	
}



ssize_t serialUlong_getSize(const void *pUlong)
{
	return sizeof(unsigned long);
}

ssize_t serialUlong_serialize(const void *pUlong, void *pBuffer)
{
	size_t  size;

	assert(pUlong != NULL);
	assert(pBuffer != NULL);
	
	size = serialUlong_getSize(pUlong);
	memcpy(pBuffer, pUlong, size);
	
	return size;
}

ssize_t serialUlong_unserialize(const void *pBuffer, void *pUlong)
{
	size_t size;

	assert(pBuffer != NULL);
	assert(pUlong != NULL);
	
	size = serialUlong_getSize(pUlong);
	memcpy(pUlong, pBuffer, size);
	
	return size;
}


