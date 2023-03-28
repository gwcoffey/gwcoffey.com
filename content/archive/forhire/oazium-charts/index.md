---
title: øAzium Charts
date: 1998-11-03
archive: forhire
client: Waves in Motion
weblog: false
---

FileMaker Pro is generally considered the easiest to use powerful relational database available, but it does not have built in support for graphical charting of Data. To accomplish the common and powerful task, developers had two options: Get fast flexible charting from a separate application, which required a time consuming multi step process, or get slow inflexible charting in FileMaker through incredibly complicated and tedious tricks. øAzium Charts puts easy to use, flexible and fast charting right in FileMaker Pro. Finally developers can integrate charts and graphs directly with their FileMaker solutions, and even build a flexible charting module into commercial products, with the help of øAzium Charts.

This manual gives you everything you need to know to build simple or complex charting into your FileMaker Pro solutions. The first chapter gets øAzium Charts up and running so you can immediately begin to experiment with the example files included with the plug-in. The second chapter explains the methodology behind charting with the plug-in and provides the basic information necessary to begin adding charts to your FileMaker solutions. It also explains the basic chart types available and the general options most chart types have. The third chapter provides clear step by step examples for using each of the available chart types. Chapter four describes the advanced features available in øAzium Charts, as well as some techniques for more powerful charting.

In Appendix A you will find a comprehensive reference style guide to the External Functions provided by the plug-in. Appendix B will be your most visited reference. It includes an exhaustive list of all options and capabilities of each chart type. Appendix C contains a list of common problems and their solutions, to keep you on track.

If you have any comments or concerns about this manual, or find any typos, please let us know by sending email to documentation@wmotion.com.

{{< aside title="Table of Contents" >}}
* [Requirements](#requirements)
* [Installation](#installation)
* [Testing the Plug-in](#testing-the-plug-in)
* [Getting Started](#getting-started)
* [External Functions](#external-functions)
	* [IsActive](#function-isactive)
	* [Init](#function-init)
	* [Background](#function-background)
	* [Options](#function-options)
	* [XAxis](#function-xaxis)
	* [YAxis](#function-yaxis)
	* [Points](#function-points)
	* [Draw](#function-draw)
{{< /aside >}}

## Requirements

Before beginning, make sure you have all the necessary hardware and software to use øAzium Charts. øAzium Charts is a FileMaker Pro plug-in, and thus requires FileMaker Pro 4.0 or later. It will not function with earlier versions of FileMaker. Contact FileMaker Inc. (http://www.filemaker.com) for upgrade or purchasing information.

The plug-in is available for Mac OS and Windows 95/98/NT platforms, and is fully PowerPC Native on Mac OS. It will also work properly with older Macintosh hardware based on the Motorola MC68000 series processor.

## Installation

The plug-in itself is called "øAaium Charts". To install the plug-in, follow these steps:

1. Make sure FileMaker Pro is not running. If it is, choose Quit from the File menu.
2. Find the FileMaker Extensions folder. It is located in the same folder as the FileMaker Pro application itself.
3. Drag the plug-in file into the FileMaker Extensions folder.
4. Launch FileMaker Pro

That's it! The plug-in should now be installed and ready to use. Make sure you test that the plug-in was installed properly before trying to use the plug-in (see below).

## Testing the Plug-in

Before you begin experimenting with the plugin, you should make sure it is actually installed and functioning properly.

1. Bring FileMaker Pro to the foreground
2. From the Edit menu choose Preferences, then Application
3. In the Preferences dialog, there is a popup menu that says "General". Choose Plugins from this menu.
4. You will see a list of installed plugins. Make sure øAzium Charts is in this list, and that there is an x in the check box next to it.

If øAzium Charts is listed and checked, the plugin is ready to use. If you don't see it there, quit FileMaker and go through the installation instructions again.

Now that the plugin is installed and running, you may want to play with the included example files. They should give you a good idea of the basic charting features available. Be sure to return to this manual for complete coverage of the features of øAzium Charts.

## Getting Started

The purpose of this chapter is to get you up and running with øAzium Charts as quickly as possible. Here we will cover the basics of charting with the plugin. After completing this chapter you will be able to add basic charting to your FileMaker Pro solutions.

### øAzium Charts Fundamentals

To use øAzium Charts you need to understand the methodology. The FileMaker Pro 4.0 plugin architecture allows the creation of External Functions. These functions are accessible in the Calculation Dialog and thus are available to field definitions and script steps which use this dialog. Essentially you can call external functions from 4 places:

1. The definition of a calculation field.
2. Under Specify in a Set Field script step
3. Under Specify in a Paste Result script step
4. Under Specify Calculation in a replace or replace script step

For the purposes of øAzium Chart, Set Field offers all the capabilities of Paste Result with the added advantage that the field being set does not need to appear on the current layout, so there is really no reason to use Paste Result with an øAzium Charts external function.

Because everything is accomplished through External Functions, a field must be the target of every external function call or group of calls. This field is not the container field which will receive the chart, but is generally a temp field. Some functions will return information that can help in troubleshooting, but it is not relevant to the end user.

To produce a final chart, you execute a series of external functions sequentially, first to set up the chart, then to draw it. øAzium Chart places the completed chart in the container field you specify, and optionally in the record you specify. Using these external functions it is possible to programmatically generate and store any number of charts, and to modify the type, style and data of a chart on the fly.

### Getting Familiar with External Functions

If you're new to FileMaker's Calculation engine, external functions may seem a bit daunting at first, and if you're an old hand at advanced calculations, you still need to understand some things about the appropriate use of the øAzium Charts external functions.

{{< note >}}
If you are not at all familiar with FileMaker Pro calculations you should first consult the documentation included with FileMaker. It contains detailed information on how to define and use calculations.
{{< /note >}}

Beginning with version 4.0 of FileMaker Pro, the calculation engine supports a new function called "External". The "External" function takes two parameters, the name of the External Function to execute and the parameters to send to the External Function. Each plugin you install includes a set of External Functions, including øAzium Charts, and each function has a unique name. To execute an External Function, you simple pass it's name as the first parameter to "External()" and any parameters it expects as the second parameter. For example, consider this calculation:

```text
External("OzCh-IsActive", "")
```

It would execute the `OzCh-IsActive` external function. This function doesn't expect any parameters, so the second parameter to the `External()` function above is blank. FileMaker evaluates calculations left to right and inside out, so you can include multiple External Functions in one calculation and even have the result of one function become the parameter of another:

```text
External("OzCh-InitChart", "Pie|" & Status(CurrentFileName) & "|Chart Field|1"
```

In this example, the first function executed is the `Status(CurrentFileName)` function, which is replaced by the name of the current database. This becomes part of the `OzCh-InitChart` parameter, then the external function is executed.

To string multiple external function calls together, you can separate each by a `&`:

```text
External("OzCh-InitChart", "Pie|My File.fp3|Chart Field|1") 
  & External("OzCh-Options", "axisfontsize=9|axisfontcolor=gray|linewidth=2")
```

This calculation would first execute the `OzCh-Init` function, then the `OzCh-Options` function.

### Three Steps to a Perfect Chart

More specifically, there are generally three steps to a finished chart:

{{< steps >}}

{{< step "Initialize the chart type." >}}
In this step you tell øAzium Charts that you are about to begin a new chart, and what type of chart it will be. When you do this, the plugin forgets all the settings that may have been sent to it for a previous (perhaps unfinished) chart and is ready to begin anew.
{{< /step >}}

{{< step "Set the chart options." >}}
This step often involves multiple External Function calls. Each one sets one of a number of options about the chart, including colors, styles, sizes and the actual data to plot.
{{< /step >}}

{{< step "Draw the chart." >}}
This is the simplest step. You call one External Function and øAzium Chart puts the finished chart in the correct place, ready to be displayed, printed, copied or stored.
{{< /step >}}

{{< /steps >}}

{{< note >}}
Because FileMaker Pro can open multiple files simultaneously, it is recommended that you always perform all three steps in one calculation or in one step. Otherwise, chart commands performed by other files may interfere with the commands you are sending.
{{< /note >}}

### Types of Charts

øAzium Charts supports eight chart types in all:

* Pie Charts
* Line Charts
* Horizontal Bar Charts
* Vertical Bar Charts
* Horizontal Stacked Bar Charts
* Vertical Stacked Bar Charts
* Scatter Charts
* High-Low Charts

Each type is explained in detail in the remaining chapters.

## External Functions

Every aspect of øAzium Charts is handled through External Functions. A complete explanation of each of these functions follows.

### Function: IsActive

Use this function to determine if a user has the plugin installed. You can then display an appropriate error message rather than attempting to generate charts. It has this syntax:

```text
External("OzCh-IsActive", "")
```

The IsActive function will return a 1 is the plugin is installed and enabled in the FileMaker Pro preferences. It will return nothing otherwise.

### Function: Init

Use this function when you want to begin a new chart. When this function is called, any previous settings to the plugin are discarded, and it becomes ready to accept commands for the new chart. You should begin every chart with a call to this function. It has this syntax:

```text
External("OzCh-Init", "<chartType>|<fileName>|<fieldName>|<recordID>|<width>|<height>")
```

* `<chartType>` (*Constant*) Can be any one of `pie`, `line`, `hbar`, `vbar`, `hsbar`, `vsbar`, `scatter`, `hilow`. Specifies the type of chart to be created.
* `<fileName>` (*Text*) Specifies the file which should receive the finished chart. The chart will be placed in a container field in this file.
* `<fieldName>` (*Text*) Specified the field which should receive the finished chart. The chart will be placed in the field in the file specified by `<fileName>`.
* `<recordID>` (*Number/Flag*) Specifies which record should receive the finished chart. The chart will be places in the container field specified by `<fieldName>` in the file specified by `<fileName>` on the record whose ID is given here. The ID of a record can be determined using the `Status(CurrentRecordID)` FileMaker built-in function. If the chart will go into a global field, you can specify `g` rather than a specific record ID.
* `<width>` (*Number*) The width the finished chart image should be, in pixels.
* `<height>` (*Number*) The height the finished chart image should be, in pixels.

This function returns no result.

{{< note >}}
The `<chartType>` parameter must be one of the 9 available chart types. Any other value will cause the initialization to fail.

If the chart is going to be placed in a global field, the record ID is irrelevant. In this case, pass the letter `g` as the `<recordID>` parameter, and the plugin will not try to update a specific record. This way, you do not need to be certain you have a valid record ID before creating the chart.

The width and height parameters must be positive integers. Pie charts are always circles, where the height and the width are the same. If the `<height>` and `<width>` parameters are different, the smaller of the two will be used.
{{< /note >}}

### Function: Background

Use this function to specify a color or image for the background of the chart. This color or image will appear behind all chart elements, including labels, bars, pie slices, axes, grid lines and plot points. If no background is specified, the background will be white by default. It has this syntax:

```text
External("OzCh-Background", "rgb(<redValue>/<greenValue>/<blueValue>)")
// or
External("OzCh-Background", "<colorConstant>")
// or
External("OzCh-Background", "<imageConstant>")
```

* `<redValue>` (*Number*) From 0 to 255, the intensity of the red componenet in an RGB color specification. You must use some other tool, like the standard color picker dialog box, to determine the component values of an RGB color.
* `<greenValue>` (*Number*) From 0 to 255, the intensity of the green componenet in an RGB color specification. You must use some other tool, like the standard color picker dialog box, to determine the component values of an RGB color.
* `<blueValue>` (*Number*) From 0 to 255, the intensity of the blue componenet in an RGB color specification. You must use some other tool, like the standard color picker dialog box, to determine the component values of an RGB color.
* `<colorConstant>` (*Constant*) Instructs the plugin to use one of the predefined colors for the chart background. Available colors include:
	* Red
	* Green
	* Blue
	* Black
	* Yellow
	* Magenta
	* Gray
	* Cyan
	* Brown
	* Purple
	* Dkgray
	* Ltblue
	* Burgundy
	* Orange
	* Ltgray
	* Dkblue
	* Pink
	* White
* `<imageConstant>` (*Constant*) Instructs the plugin to use a background image. There are 10 images to choose from, named image1 through image10, and only these images are currently supported.

### Function: Options

The Options function allows you to set special options of various chart types. You pass it a series of parameters, seperated by pipes, where each parameter includes the name of the option to be set and the value to set it to. You can pass as many or as few options in one call as you like. It has this syntax:

```text
External("OzCh-Options", "<optionLabel>=<optionValue>[|<optionLabel>=<optionValue>]...")
```

* `<optionLabel>` (*Constant*) The option to set. Currently, the available options are:
* `<optionValue>` (*Text*) The setting for the option specified in `<optionLabel>`. The appropriate values vary by `<optionLabel>`

This function returns no result.

{{< note >}}
With future versions of øAzium Charts, we may add new capabilities. The structure of the Options function allows us to implement new features without adding more functions or complicating existing functions.
{{< /note >}}

### Function: XAxis

The XAxis function controls display of the x-axis on line and bar charts. It allows you to specify the color and thickness of the axis, as well as the placment and labeling of tick marks. It has this syntax:

```text
External("OzCh-XAxis", "color=<axisColor>|major=<tickIncrement>|
size=<axisSize>")
```

* `<axisColor>` (*Color*) The color of the x-axis. `<axisColor>` can be expressed as a color constant or an RGB value.
* `<tickIncrement>` (*Number*) Specifies the space between tick marks along the x-axis. A short tick mark will be drawn across the axis every `<tickIncrement>` units.
* `<axisSize>` (*Number*) The size of the x-axis line itself, in pixels. This value also effects the thickness of the tick marks along the x-axis if they are drawn.

This function returns no result.

{{< note >}}
The parameter list of the XAxis function includes various name/value pairs of the form name=value. For instance, color=blue is a name/value pair, where the item named color is given the value blue. These various pairs can actually be passed to the function in any order, and all are optional. If color is left out, black is used by default. The default size is two, and if the major parameter is missing, no tick marks will be drawn. The tick labels are optional as well, but if present, they must be at the end of the parameter string, preceeded by the labels keyword. If you don't intend to pass labels, the keyword and list of values can be left out.
{{< /note >}}


### Function: YAxis

The YAxis function controls display of the y-axis on line and bar charts. It allows you to specify the color and thickness of the axis, as well as the placment and labeling of tick marks. It has this syntax:

```text
External("OzCh-YAxis", "color=<axisColor>|major=<tickIncrement>|
size=<axisSize>")
```

* `<axisColor>` (*Color*) The color of the y-axis. `<axisColor>` can be expressed as a color constant or an RGB value.
* `<tickIncrement>` (*Number*) Specifies the space between tick marks along the y-axis. A short tick mark will be drawn across the axis every `<tickIncrement>` units.
* `<axisSize>` (*Number*) The size of the y-axis line itself, in pixels. This value also effects the thickness of the tick marks along the y-axis if they are drawn.

This function returns no result.

{{< note >}}
The parameter list of the YAxis function includes various name/value pairs of the form name=value. For instance, color=blue is a name/value pair, where the item named color is given the value blue. These various pairs can actually be passed to the function in any order, and all are optional. If color is left out, black is used by default. The default size is two, and if the major parameter is missing, no tick marks will be drawn. The tick labels are optional as well, but if present, they must be at the end of the parameter string, preceeded by the labels keyword. If you don't intend to pass labels, the keyword and list of values can be left out.
{{< /note >}}


### Function: XGrid

The XGrid function controls the display of gridlines perpendicular to the x-axis. It allows you to specify the size and color of the lines, and how close together they are drawn. It has this syntax:

```text
External("OzCh-XGrid", "color=<gridColor>|major=<increment>|size=<gidSize>")
```

* `<axisColor>` (*Color*) The color of the x grid lines. `<axisColor>` can be expressed as a color constant or an RGB value.
* `<increment>` (*Number*) Specifies the space between x grid lines.
* `<gridSize>` (*Number*) The thickness of the x grid lines, in pixels.

{{< note >}}
If you do not call the XGrid function when generating a chart, no x gridlines will be drawn.

If you do not pass a name/value pair for major, the grid lines will automatically be spaced according to the major value for the tick marks of the x-axis.
{{< /note >}}



### Function: YGrid

The YGrid function controls the display of gridlines perpendicular to the y-axis. It allows you to specify the size and color of the lines, and how close together they are drawn. It has this syntax:

```text
External("OzCh-YGrid", "color=<gridColor>|major=<increment>|size=<gidSize>")
```

* `<axisColor>` (*Color*) The color of the y grid lines. `<axisColor>` can be expressed as a color constant or an RGB value.
* `<increment>` (*Number*) Specifies the space between y grid lines.
* `<gridSize>` (*Number*) The thickness of the y grid lines, in pixels.

{{< note >}}
If you do not call the YGrid function when generating a chart, no y gridlines will be drawn.

If you do not pass a name/value pair for major, the grid lines will automatically be spaced according to the major value for the tick marks of the y-axis.
{{< /note >}}

### Function: Points

This function tells the plugin what points to actually plot. It's syntax varies based on chart type. These points form the content of the chart when drawn. It has this syntax:

```text
# For Pie charts:
External("OzCh-Points", "<sliceValue>[|<sliceValue]+")

# For Line charts:
External("OzCh-Points",
	"linecolor=<lineColor>|Linesize=<lineSize>|
	pointstyle=<pointStyle>|pointcolor=<pointColor>|
	<pointXValue>,<PointYValue>
	[|<pointXValue>,<PointYValue>]+")

# For HBar and VBar charts:
External("OzCh-Points",
	"<barValue>,<barColor>,<barLabel>
	[|<barValue>,<barColor>,<barLabel>]+)

# For HSBar and VSBar charts:
External("OzCh-Points", "<stackValue>,<stackColor>")

# For Scatter charts:
External("OzCh-Points", "pointstyle=<pointStyle>|
	pointcolor=<pointColor>|
	<pointXValue>,<pointYValue>
	[|<pointXValue>,<pointYValue>]+")

# For Hilo charts:
External("OzCh-Points", 
	"linecolor=<hiColor>|linesize=<hiSize>|
	<xValue>,<hiValue>,<loValue>
	[<xValue>,<hiValue>,<loValue>]+")
```

* `<sliceValue>` (*Number*) The numerical value of one slice of the pie chart. Each slice will be sized based on this value as compared  to the total of all `<sliceValue>`'s. You can pass as many values as you like.
* `<lineColor>` (*Color*) The color the line connecting the data points should be.
* `<lineSize>` (*Number*) The thickness in pixels to draw the line connecting data points.
* `<pointStyle>` (*Constant*) The symbol to draw to mark an individual data point. The possible values are:
	* Circlehollow
	* Circlesolid
	* Diamondhollow
	* Diamondsolid
	* Squarehollow
	* Squaresolid
	* Trianglehollow
	* Trianglesolid
	* Crossbig
	* Crosssmall
* `<pointColor>` (*Color*) The color the data point symbol should be drawn in.
* `<pointXValue>` (*Number*) The x-value (position along the horizontal axis) of the data point.
* `<pointYValue>` (*Number*) The y-value (position along the vertical axis) of the data point.
* `<barColor>` (*Color*) The color the bar should be drawn in.
* `<barValue>` (*Number*) The numerical value of the bar. This determines how tall or long the bar is.
* `<barLabel>` (*Text*) An optional label to appear above or to the right of the bar. If this parameter is not specified, no label will be included.
* `<stackValue>` (*Number*) The numerical value of one portion of the bar. It will be drawn to this value starting from the end of the previous portion of this bar.
* `<stackColor>` (*Color*) The color of this portion of the bar.
* `<hiColor>` (*Color*) The color of the High-Low symbol.
* `<hiSize>` (*Number*) The line thickness of the High-Low symbol.
* `<xValue>` (*Number*) Where along the x axis (horizontal axis) the symbol should be drawn.
* `<hiValue>` (*Number*) The top point of the High-Low symbol.
* `<loValue>` (*Number*) The bottom point of the High-Low symbol.

{{< note >}}
In order to chart data with the plugin, you must be able to get the point values into one calculation. If the values span multiple records, you must use some technique to gather them before passing them to the plugin. One method is to step through the records in a looping script, concatenating them in a global field as you go. In general, though, you will be charting summary data, which will usually be accessible all at once more easily.

In line and bar chart types, you can plot multiple series of data for comparison. You can call OzCh-Points multiple times to load the various series into the plugin.

In the line chart parameters, if you do not specify a `<pointStyle>` and `<pointColor>`, the points will not be specifically identified, and just the connecting line will be drawn.
{{< /note >}}

### Function: Draw

This function simply instructs the plugin to draw the chart. With Microsoft Windows 95/98/NT, the chart image will be placed on the clipboard to be pasted into the appropriate field. With Mac OS the chart image will be placed directly into the field, file and record specified in the call to `OzCh-Init`. It has this syntax:

```text
External("OzCh-Draw", "")
```