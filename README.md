# Page Scaler

A React component that uniformly scales all of its children to fit the visible window.

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

contentWidth: the width in pixels of the contained content
contentHeight: the height in pixels of the contained content
color1 [_optional_]: the primary color of the stripes (or the background color when `noStripes` is set). Defaults to `black`.
color2 [_optional_]: the secondary color of the stripes. Defaults to `darkslategray`.
noStripes [_optional_]: set to turn the stripes off.

## Potential Uses

- Demoing content for kiosks or digital signage on other screens
- Slideshows