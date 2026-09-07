# STHLM Night website update

The homepage now leads with wide-angle portraits and retains event photography as the broader service. It uses the existing photographs, contact details, Instagram address, PhotoSwipe gallery and static GitHub Pages structure.

## Photography still needed

The supplied archive has DJs, concerts and venue photographs, but no close group portraits. The hero currently uses img04.jpg, a wide-angle DJ image. For the intended positioning to be convincing, replace it with a strong close wide-angle portrait and lead the gallery with several real examples of that work. Update alt text and image dimensions when changing photographs. Do not use generated portfolio photographs.

## Publishing on the existing GitHub Pages site

Copy the contents of this directory into the existing repository root, retaining its current Pages settings, then commit and push using the normal GitHub workflow. This update has not been pushed or published.

Changed website files: index.html, css/styles.css, js/scripts.js. CNAME and all original image and PhotoSwipe files are preserved. No package installation or build step is required.

The original CNAME contains two domain lines. It has been preserved because the active Pages domain configuration was not available for inspection. Check the repository's custom-domain configuration separately before changing that file.

## Checks

Local image and stylesheet/script references, navigation targets, gallery image dimensions and JavaScript syntax were checked. Browser rendering was not tested.
