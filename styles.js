﻿/**
 * Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin which shows the Styles drop-down
// list containing all styles in the editor toolbar. Other plugins, like
// the "div" plugin, use a subset of the styles for their features.
//
// If you do not have plugins that depend on this file in your editor build, you can simply
// ignore it. Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.
//
// For more information refer to: http://docs.ckeditor.com/#!/guide/dev_styles-section-style-rules

CKEDITOR.stylesSet.add( 'email_styles', [
    // Block-level styles
    { name: 'Title Large Green', 
    element: 'h1', 
    styles: { 
		'color': '#007E66', 
		'margin-bottom': '15px', 
		'display': 'block', 
		'line-height': '1', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '24px',
		'webkit-text-size-adjust':'none'
		} 
    },

    { name: 'Title Large', 
    element: 'h1', 
    styles: { 
		'color': '#55616D', 
		'margin-bottom': '15px', 
		'display': 'block', 
		'line-height': '1', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '24px',
		'webkit-text-size-adjust':'none'
		} 
    },

    { name: 'Title Standard Green', 
    element: 'h2', 
    styles: {
    	'color': '#007E66',
    	'margin-bottom': '15px', 
		'display': 'block', 
		'line-height': '1', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '20px',
		'font-weight': '700',
		'webkit-text-size-adjust':'none'
     	}
 	},

 	{ name: 'Title Standard', 
    element: 'h2', 
    styles: {
    	'color': '#55616D',
    	'margin-bottom': '15px', 
		'display': 'block', 
		'line-height': '1', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '20px',
		'font-weight': '700',
		'webkit-text-size-adjust':'none'
     	}
 	},

 	{ name: 'Paragraph Text Standard', 
    element: 'span', 
    styles: {
    	'color': '#55616D',
    	'margin-bottom': '15px', 
		'margin-top': '0', 
		'display': 'block',
		'line-height': '1.65', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '16px',
		'font-weight': '400',
		'webkit-text-size-adjust':'none'
     	}
 	},

 	{ name: 'Link Underline Blue', 
    element: 'span', 
    styles: {
    	'color': '#00A0DF',
    	'margin-bottom': '15px', 
		'margin-top': '0', 
		'line-height': '1.65', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '16px',
		'font-weight': '400',
		'text-decoration': 'underline',
		'webkit-text-size-adjust':'none'
     	}
 	},
 	{ name: 'List Item Style', 
    element: 'span', 
    styles: {
    	'color': '#55616D',
    	'margin-bottom': '10px', 
		'margin-top': '0', 
		'line-height': '1.65', 
		'font-family': 'Helvetica, Arial, sans-serif',
		'font-size': '16px',
		'font-weight': '400',
		'list-style-type': 'disc',
		'webkit-text-size-adjust':'none'
     	}
 	},
 	{ name: 'Text Signature',
 	element: 'span',
 	styles: {
 		'color': '#788991', 
 		'margin-bottom': '15px', 
 		'font-family': 'Helvetica, Arial, sans-serif', 
 		'font-weight': '400', 
 		'font-size': '16px', 
 		'line-height': '1.65', 
 		'display': 'block',
 		'webkit-text-size-adjust':'none'
 		}
 	},
 	{ name: 'Link Text',
 	element: 'a',
 	styles: {
 		'color': '#00a0df',
 		'text-decoration': 'underline'
 		}
 	},
 	{ name: 'Button Text',
 	element: 'a',
 	styles: {
 		'color': '#fff',
 		'text-decoration': 'none'
 		}
 	},
 	{ name: 'Button Blue',
 	element: 'span',
 	styles: {
 		'background-color': '#00a0df',
 		'color': '#fff', 
 		'font-family': 'Helvetica, Arial, sans-serif', 
 		'font-weight': '400', 
 		'font-size': '16px', 
 		'line-height': '1', 
 		'display': 'inline-block',
 		'text-decoration': 'none',
 		'text-align': 'center',
 		'webkit-text-size-adjust':'none',
 		'border-radius': '25px 25px 25px 25px',
 		'padding': '10px 20px 10px 20px'
 		}
 	},
 	{ name: 'Button Green',
 	element: 'span',
 	styles: {
 		'background-color': '#2eb135',
 		'color': '#fff', 
 		'font-family': 'Helvetica, Arial, sans-serif', 
 		'font-weight': '400', 
 		'font-size': '16px', 
 		'line-height': '1', 
 		'display': 'inline-block',
 		'text-decoration': 'none',
 		'text-align': 'center',
 		'webkit-text-size-adjust':'none',
 		'border-radius': '25px 25px 25px 25px',
 		'padding': '10px 20px 10px 20px'
 		}
 	},
 	{ name: 'Button Orange',
 	element: 'span',
 	styles: {
 		'background-color': '#ff7900',
 		'color': '#fff', 
 		'font-family': 'Helvetica, Arial, sans-serif', 
 		'font-weight': '400', 
 		'font-size': '16px', 
 		'line-height': '1', 
 		'display': 'inline-block',
 		'text-decoration': 'none',
 		'text-align': 'center',
 		'webkit-text-size-adjust':'none',
 		'border-radius': '25px 25px 25px 25px',
 		'padding': '10px 20px 10px 20px'
 		}
 	},
        { name: 'Green Banner',
         element: 'span',
         styles: {
                 'font-size': '16px',
                 'line-height': '30px',
                 'color': '#ffffff',
                 'background-color': '#A0CE6D',
                 'text-align': 'center',
                 'display': 'block'
                 }
        }
] );



CKEDITOR.stylesSet.add( 'default', [
	/* Block styles */

	// These styles are already available in the "Format" drop-down list ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' },
	*/

	{ name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },
	{ name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' } },
	{
		name: 'Special Container',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		}
	},

	/* Inline styles */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles drop-down list, removing them from the toolbar.
	// (This requires the "stylescombo" plugin.)
	/*
	{ name: 'Strong',			element: 'strong', overrides: 'b' },
	{ name: 'Emphasis',			element: 'em'	, overrides: 'i' },
	{ name: 'Underline',		element: 'u' },
	{ name: 'Strikethrough',	element: 'strike' },
	{ name: 'Subscript',		element: 'sub' },
	{ name: 'Superscript',		element: 'sup' },
	*/

	{ name: 'Marker',			element: 'span', attributes: { 'class': 'marker' } },

	{ name: 'Big',				element: 'big' },
	{ name: 'Small',			element: 'small' },
	{ name: 'Typewriter',		element: 'tt' },

	{ name: 'Computer Code',	element: 'code' },
	{ name: 'Keyboard Phrase',	element: 'kbd' },
	{ name: 'Sample Text',		element: 'samp' },
	{ name: 'Variable',			element: 'var' },

	{ name: 'Deleted Text',		element: 'del' },
	{ name: 'Inserted Text',	element: 'ins' },

	{ name: 'Cited Work',		element: 'cite' },
	{ name: 'Inline Quotation',	element: 'q' },

	{ name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
	{ name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },

	/* Object styles */

	{
		name: 'Styled Image (left)',
		element: 'img',
		attributes: { 'class': 'left' }
	},

	{
		name: 'Styled Image (right)',
		element: 'img',
		attributes: { 'class': 'right' }
	},

	{
		name: 'Compact Table',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		},
		styles: {
			'border-collapse': 'collapse'
		}
	},

	{ name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	{ name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' } },

	/* Widget styles */

	{ name: 'Clean Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-clean' } },
	{ name: 'Grayscale Image', type: 'widget', widget: 'image', attributes: { 'class': 'image-grayscale' } },

	{ name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: { 'class': 'code-featured' } },

	{ name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: { 'class': 'math-featured' } },

	{ name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' } },
	{ name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' } },
	{ name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' } },
	{ name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' } },
	{ name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' } },

	// Adding space after the style name is an intended workaround. For now, there
	// is no option to create two styles with the same name for different widget types. See #16664.
	{ name: '240p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-240p' } },
	{ name: '360p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-360p' } },
	{ name: '480p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-480p' } },
	{ name: '720p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-720p' } },
	{ name: '1080p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-1080p' } }

] );

