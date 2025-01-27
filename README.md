
<!--#echo json="package.json" key="name" underline="=" -->
psd-pmb
=======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Embrace and extend psd.js
<!--/#echo -->


Based on great prior art
------------------------

Ryan LeFevre ([@meltingice](https://github.com/meltingice))
has done a neat job implementing the
[upstream `psd.js` library](https://github.com/meltingice/psd.js). 🌈✨

Unfortunately, he seems to no longer have time for maintaining it,
so this project here may some day become a maintenance reboot.

I'm planning to also maintain a maintenance fork
[over here](https://github.com/mk-pmb/psd.js)
in order to easily embrace pull requests from the original repo.
However, in the maintenance reboot (`psd-pmb`), I will try my best to avoid
ever having huge binary blobs committed on active code branches – which due
to how `git` works, means it cannot be a true "fork" in git vocabulary.

Until I find time to make a proper maintenance reboot, this will be
just a thin API wrapper to fix some of my most pressing issues.



API
---

This module exports an object that holds these functions:

### .fromUint8Array(fileBytes)

Returns a promise for the already-parsed PSD file object.
Automatically detects and unpacks gzip compression.



### .fromFile(pathOrUrl)

Like `.fromUint8Array()` but non-blockingly reads a file
from disk (node.js only)
or downloads it from a URL (not implemented yet).






<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
MIT
<!--/#echo -->
