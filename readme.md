<image src="app-icon.png" align="right" width="200px">

# Image Hotspots 3 App for .net CMSs

> This is a [2sxc](https://2sxc.org) App for [DNN ☢️](https://www.dnnsoftware.com/) and [Oqtane 💧](https://www.oqtane.org/)

A awesome image hotspots app to use with 2sxc

| Aspect              | Status | Comments or Version |
| ------------------- | :----: | ------------------- |
| 2sxc                | ✅    | Hotspot v3 requires 2sxc v13.10
| Dnn                 | ✅    | For v7, v8 and v9
| Oqtane 2            | ✅    | Requires v2.02
| No jQuery           | ✅    | Since v3
| Live Demo           | ➖    | 
| Install Checklist   | ✅    | See [Installation](https://azing.org/2sxc/r/ccfIKnqk) on [azing.org](https://azing.org/2sxc)
| Source & License    | ✅    | included, ISC/MIT
| App Catalog         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/image-hotspots-v3-hybrid-for-dnn-and-oqtane)
| Screenshots         | ✅    | See [app catalog](https://2sxc.org/en/apps/app/image-hotspots-v3-hybrid-for-dnn-and-oqtane)
| Best Practices      | ✅    | Uses v13.10 conventions
| Bootstrap 4         | ✅    | v4 optimized
| Bootstrap 5         | ✔️    | Tested & works but not optimized

## Customize the App

You can configure a lot, and since it's open-source you can also change anything you want. 

If you want to customize the CSS, you will usually follow the ["Create Custom Styles in a Standard 2sxc App" checklist](https://azing.org/2sxc/r/gg_aB9FD)

## History

* 2021-09 v03.00.00
  * Update to 2sxc 12.05 standard
  * Hybrid for Dnn & Oqtane
  * dropped jQuery
  * cleaner code
* 2022-04 v03.01.00
  * Changed all access to services to ToSic.Sxc.Services
  * Changed all images to use IImageService
  * Activated image configuration
* 2022-06 v03.02.00 
  * Changed all base classes to their 2sxc 14 equivalents
  * Replaced all GetService<> with the new ServiceKit14
  * Updated webpack
  * Changed all toolbar configurations to use the IToolbarService
* 2022-07 v03.02.01 
  * Changed the typescript typings to the new Typescript API