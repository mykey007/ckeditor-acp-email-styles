Where the custom stuff is:

Three files have been modified to create the custom style dropdown
1. styles.js
2. the index file (for testing I used samples/index.html)
3. config.js

## styles.js
This is where a bulk of the work is done. you create an array of styles and watch it grow!
example:
```
CKEDITOR.stylesSet.add( 'email_styles', [
    // Block-level styles
    { name: 'Large Green Title', 
    element: 'h1', 
    styles: { 
	'color': '#007E66', 
	'margin-bottom': '15px', 
	'margin-top': '15px', 
	'line-height': '1.25', 
	'font-family': 'Helvetica, Arial, sans-serif',
	'font-size': '24px',
	} 
      }
    ]);
```
## index.html
here you need to link to your styles file after `ckeditor.js`
```
<script src="../styles.js"></script>
```
## config.js
here you need to include `email_styles` at the end of the file but within the config function like so:
```
config.stylesSet = 'email_styles';
```
CKEditor 4
==========

Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
http://ckeditor.com - See LICENSE.md for license information.

CKEditor is a text editor to be used inside web pages. It's not a replacement
for desktop text editors like Word or OpenOffice, but a component to be used as
part of web applications and websites.

## Documentation

The full editor documentation is available online at the following address:
http://docs.ckeditor.com

## Installation

Installing CKEditor is an easy task. Just follow these simple steps:

 1. **Download** the latest version from the CKEditor website:
    http://ckeditor.com. You should have already completed this step, but be
    sure you have the very latest version.
 2. **Extract** (decompress) the downloaded file into the root of your website.

**Note:** CKEditor is by default installed in the `ckeditor` folder. You can
place the files in whichever you want though.

## Checking Your Installation

The editor comes with a few sample pages that can be used to verify that
installation proceeded properly. Take a look at the `samples` directory.

To test your installation, just call the following page at your website:

	http://<your site>/<CKEditor installation path>/samples/index.html

For example:

	http://www.example.com/ckeditor/samples/index.html
