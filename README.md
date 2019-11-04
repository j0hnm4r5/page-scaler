# Page Scaler

A React component that uniformly scales all of its children to fit the visible window.


![Example](https://github.com/j0hnm4r5/page-scaler/raw/master/images/example.gif)


## Usage

Import the component:
```
import PageScaler from "page-scaler`;
```

Use it:
```
<PageScaler contentWidth={1920} contentHeight={1080}>
	<div style={{
		width: "1920px",
		height: "1080px",
	}}>
		... YOUR CONTENT HERE ...
	</div>
</PageScaler>
```

Make sure the container div for the contained content has a defined width and height!


## Parameters

`contentWidth`: the width in pixels of the contained content. Must be a number.

`contentHeight`: the height in pixels of the contained content. Must be a number.

`color1` [_optional_]: the primary color of the stripes (or the background color when `noStripes` is set). Defaults to `black`.

`color2` [_optional_]: the secondary color of the stripes. Defaults to `darkslategray`.

`noStripes` [_optional_]: set to turn the stripes off.


## Notes

If you're seeing inconsistent results, your container div might not actually be the size you think it is — for example, padding will change the size of a div (unless you use `box-sizing: border-box;`).


## Potential Uses

- Demoing content for exactly-sized kiosks or digital signage on other screens
- Slideshows