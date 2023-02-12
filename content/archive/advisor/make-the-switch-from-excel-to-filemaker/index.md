---
title: "Make the Switch from Excel to FileMaker"
date: 2007-01-16
archive: advisor
---

It seems like Microsoft Excel is installed on just about every PC in the world. As such, a lot of new FileMaker developers are already Excel wizards. In fact, many new FileMaker projects begin life as a replacement for an Excel spreadsheet that has outgrown itself. If you are an Excel star trying to wind your way through the FileMaker universe, you may be stymied at first by all the things you thought you knew that just don't seem to apply anymore. In this article, you'll learn how to make the most of your Excel expertise and get up and running in FileMaker in no time.

Imagine you are the sole proprietor of Parthenon Party Supplies, a purveyor of themed party products. Like a lot of small business owners, you use Excel to keep track of just about everything. But lately you've grown weary of Excel's one-view-fits-all model, it's hopeless dependence on copy/paste to make use of data in multiple places, and less-than-perfect tools to sort the data and find what you're looking for. In fact, you've decided to upgrade to FileMaker because you've heard it handles business data and processes deftly. Your first task is to move your spreadsheet of products from Excel into FileMaker. Figure 1 shows the spreadsheet you're starting with.

{{< figure
    title="Figure 1"
    src="COFFG02A.png"
    width="688"
    height="459"
    alt="An Excel spreadsheet with two sections. The first shows a list of products with a Part Number, Description, Price and Cost. To the right there is a small box where you can enter a cost and margin and it will calculate the price."
    caption="This is your Products spreadsheet. It includes a product list and simple price calculator." >}}

Now before the hate mail starts flying, it is important to note that Excel is an outstanding program well suited to many tasks. Every FileMaker developer you'll ever meet probably also uses Excel all the time. Excel is particularly suited to general analysis of a set of numbers, financials, and graphing applications — in these areas, FileMaker's best response is to graciously step aside. But when it comes to managing business data, FileMaker reigns supreme.

## Rows and Columns

Excel has a very open-ended rows-and-columns approach to handling data, but FileMaker is decidedly more rigid. Your first step is to create a FileMaker table that can hold the same kind of data you've entered into your spreadsheet. In most cases, this means three things:

First, you need a "Table" for each type of item you're tracking. This will often (but not always) correspond to a worksheet. In this case, your are tracking just products, so you need just one table. Second, your table needs a "Field" for each individual attribute of a product. This usually means one field for each column in your spreadsheet. Finally, you will add a record to the table for every individual product. In other words, you'll have one FileMaker record for each row in the spreadsheet.

{{< aside title="Database Structure" >}}
The most obvious difference between a spreadsheet and a database is that spreadsheets care very little about the structure of the data they hold. When you create a new Excel file, you're presented with seemingly infinite little cells into which you can type. Excel is like a gracious host: "Make yourself at home."

A new FileMaker file, on the other hand, is more like your highschool girlfriend's father. It's twenty questions before you even get your foot in the door. In fact, the very first thing you see when you make a new database is an imposing dialog box asking you to "define" your database. In this window, you tell it exactly what kinds of things you're keeping track of, what information you want to know about them, and how they all fit together.

It may seem daunting at first, but by asking for details right up front, FileMaker knows a lot more about your data than Excel ever could — knowledge it puts to good use. Like exactly how many products you carry. When you want to rearrange the product list (using the Records → Sort command) it knows that there are preciesly five things you can sort by, and you can specify one by name. It knows that you may want to look at your products in a list, but you're just as likely to want a larger view, with room for notes and pictures, and when you add this larger view, it knows that even though there are two ways to look at a product, it is really just one product. When you change a description, it can change it in both places at once automatically, with no special hand holding on your part.

As you start to migrate things from Excel to FileMaker, just remember to think about your data before you start defining. If you are managing two completely different things (customers and products for example) then you'll want to store them in different FileMaker tables. And although a row in a spreadsheet usually corresponds to a record in FileMaker, this isn't always the case. Your Employees spreadsheet might have a separate employee in each column, with their information listed on several rows. In this case, you'll want a record for each column, and a field for each row. Just remember: A table for each type, a field for each attribute, and a record for each individual.
{{< /aside >}}

To get started, in FileMaker Pro, choose File → New Database. FileMaker will first ask you what to call your database, and where to put it (answer any way you like here, then click Save). Next you see FileMaker's Define Database dialog box. This is where you tell FileMaker how your database should be structured.

To start you off, FileMaker has created a table for you and named it the same as the database itself. Chances are you'll want to rename that table:

{{< steps >}}

{{< step "Click the Tables tab." >}}
You see a list of tables in your database (in this case there is just one item in the list).
{{< /step >}}

{{< step "Click on the table in the list." >}}
FileMaker highlights the table and shows its name in the Table Name box at the bottom of the window.
{{< /step >}}

{{< step "Change the text in the Table Name box to Products and click Change." >}}
The list now shows a Products table.
{{< /step >}}

{{< /steps >}}

With the table successfully renamed, you can switch back to the Fields tab. This is where you'll tell FileMaker what kinds of information you want to enter about a product. Your spreadsheet has five columns of product information:

* Part#
* Description
* Price
* Cost
* Margin

The first four are normal columns, into which you type information. But Margin is special because it uses a formula in Excel to automatically calculate its value. You will learn how to deal with this shortly. For now, you'll ignore the Margin column and add fields for just the first four.

Adding fields is easy. First, type the field name in the Field Name box. Then pick an appropriate data type from the Type pop-up menu. Finally, click Create. For Part# and Description, you should use the Text type. For Price and Cost, pick Number instead. When you're finished, your Define Database window should look suprisingly like Figure 2.

{{< figure
    title="Figure 2"
    src="COFFG02C.png"
    width="751"
    height="573"
    alt="The Fields tab of the Define Database window showing a list of the four fields just created."
    caption="Here's the Fields tab of the Define Database dialog box with a field for each column in the spreadsheet. You're just about ready to enter some data." >}}

Now you can click OK to close the Define Database window. FileMaker shows you an exceedingly sparse window with your four fields. To make yourself feel a little more at home, choose View → View as Table. FileMaker now shows your table in a more spreadsheet-like way, with a row for each record and a column for each field.

At this point, you are free to enter data. Type in a part number, description, price, and cost. To resize a column, simply click between two column headings and drag to the right or left, like you would in Excel. When you're ready to add a new product, choose Records → New Record. A new blank row will appear immediately after the first one. To get rid of a record you've already created, choose Records → Delete Record... instead. Although you need to be more explicit, you'll quickly discover that managing records this way is a breeze. You no longer need to make sure you select every column before deleting a row, and there's no way to accidentally get your rows mixed up from column to column.

## Formats and Decorations

Now that you have a place to put your data, you can start to mold the way it looks to match what you are used to. Your spreadsheet does FileMaker one better in two ways: First, the price and cost look like dollar amounts in Excel. Second, the spreadsheet has an attractive grey bar across the top that declares this to be a list of "Products." You can easily accomplish both of these in FileMaker.

When you defined the price and cost fields, you told FileMaker they should hold numbers. But a number can be anything from a dollar amount to a size to an employee ID. When it comes time to show the number on screen, FileMaker can automatically format it in any way you want, much like the Number tab in Excel's Format → Cells window.

The look of a database is controlled by the something called a Layout in FileMaker. Right now you have just one layout, but you're actually free to create as many as you want. No matter how many you have, though, if you ever want to change the way something looks, you first need to switch to Layout Mode. You do this by choosing the View → Layout Mode command. When you make the switch, you'll see that the spreadsheet-like look has disappeared. Don't be alarmed — you'll lear more about this soon. For now, just try to hold yourself together long enough to make a few changes.

Once in Layout Mode, click on the Price field (The little rectangle with Price written inside it) to select it. Then, with the Shift key held down, click on the Cost field. Now both fields are selected, so you can modify them both in one shot. Now choose the Format → Number... menu command, and FileMaker will show you its Number Format dialog box (Figure 3). 

{{< figure
    title="Figure 3"
    src="COFFG02D.png"
    width="641"
    height="537"
    alt="FileMaker's Number Format dialog box, showing many radio buttons, checkboxes, and pop-up menus. The Format as Decimal radio button is enabled. The \"Fixed number of decimal digits\" checkbox is enabled with its value set to \"2\". And the \"Use notation\" checkbox is enabled, set to \"Currency (Leading/Inside)\" with a \"Currency Symbol\" of \"$\"."
    caption="This is how the Number Format dialog box looks when you've asked FileMaker to format a number to look like a dollar amount. This same window lets you control how negative numbers appear, control the use of commas, display percentages, and more." >}}

In the Number Format window, choose Format as decimal. Then turn on "Fixed number of decimal digits" and make sure its associated box has "2" in it. Finally, turn on the "Use notation" check box, choose "Currency (Leading/Inside)" from its pop-up menu, and make sure there is a dollar sign in the Currency Symbol box. When you're finished, click OK.

To view the results of your layout changes, switch back to Browse Mode by clicking View → Browse Mode. If FileMaker asks you if you want to save your changes, click Save. Your Price and Cost fields should now look just like they did in Excel.

Next, you need to add the grey title bar across the top of the window. This is even easier, and if you're in the mood to explore, you'll quickly discover that FileMaker's window decorating powers far exceed what Excel can do, both in flexibility and simplicity.

To get started, switch back to Layout Mode. While Excel only knows about rows and columns, FileMaker divides the working space in a window into useful chunks called Parts. In a new layout like the one you're creating, you automatically have three parts: Header, Body, and Footer. But because you previously opted for the spreadsheet view style, these parts don't automatically display in Browse Mode. To change this, first choose Layouts → Layout Setup and click the Views tab in the resulting dialog box. Then click the Properties button (right by Table View). Finally, turn on the "Include header part" checkbox. Click OK twice to close both open dialog boxes when you're done.

Now any changes you make to the header part in Layout Mode will show up in Browse Mode too. To find the header part, look at the top portion of the window, near the left edge. You'll see a little tag with the word Header in it (see Figure 4). This tag and the dotted line that extends from it, mark the bottom of the header part.

The first thing you need to do is make the header bigger. Simply click and drag the header tag down so that the part is about half an inch tall. Next, you need to give the header part a grey background color. Figure 4 shows how to do this.

{{< figure
    title="Figure 4"
    src="COFFG02E.png"
    width="400"
    height="428"
    alt="Detail of two parts of the FileMaker window. At the top, the \"Header\" tag is highlighted and labeld \"Header part tag\". At the bottom, the cluster of tools in the Status are is shown, and the \"Fill color tool\" is indicated."
    caption="To color the header, first select the header part tag. Then click the Fill color tool and pick a color that suits your fancy." >}}

With the header part nicely colored, you can now add the title text. This step couldn't be easier. First click in the header part (anywhere you want) then just start typing. Type the word "Products" and then click somewhere outside the text box that has appeared. FileMaker leaves a little text block behind, selected and ready for you to style and position. To style it, choose the appropriate commands from the Font, Size, and Style submenus in the Format menu. Then drag the text into the top-right corner of the part. If the header isn't big enough to hold your text, just drag it a little bigger. This is the artistic side of FileMaker and you're free to arrange things any way you want. When your done, switch back to Browse Mode and compare your work with Figure 5.

{{< figure
    title="Figure 5"
    src="COFFG02F.png"
    width="748"
    height="511"
    alt="The database window now with a grey header and the text \"Products\". The \"Price\" and \"Cost\" fields in the list also show as dollar amounts."
    caption="Here's a visually enhanced version of the database. Yours could look like this, or it might be orange with purple wingdings. FileMaker is flexible." >}}

## Formulas

If your the nerdy type, you might be thinking "big deal... can it do Formulas?" After all, Excel may look like a word processor designed by the folks behind the Medicare Drug Benefit, but it goes way beyond entering text in myriad little boxes. Its real power lies in its ability to derrive new information from the data you give it by applying a healthy dose of math. FileMaker's answer to this basic need is the Calculation Field. Now is a good time to add that formulaic Margin field from the spreadsheet.

First, choose File → Define → Database, and switch to the Fields tab. In the Field Name box, enter "Margin" and, from the Type pop-up menu, choose Calculation. Finally, click Create. FileMaker pops up the slightly scary Define Calculation dialog box. This is sort of like Excel's Insert Function command and a powerful formula editor all in one. In here, you'll define the formula this calculation field will use to determine its value.

The formula for the cell in Excel looks like this:

```text
=(D4-E4)/E4
```

In other words, subtract the cost from the price and divide the result by the cost. The FileMaker equivalent looks almost the same, although it is decidedly more readable. (Why doesn't Excel let you use such an easy-to-read formula? Because it doesn't know about your data structure the way FileMaker does.) Here it is:

```text
(Price - Cost) / Cost 
```

To enter this formula, you're free to type it directly in the big empty box in the Define Calculation dialog box. If typing gets you down, you can double-click any field from the list in the top-left corner of the window to have its name entered in the formula box for you. Either way, make sure you get the parentheses, the divide symbol, and all three fields in the right place. Also, be sure Number is chosen in the "Calculation result is" pop-up menu in the bottom-left corner of the winodw. When you're done, click OK, and then click OK again in the Define Database window.

{{< aside title="The Formula for Formulas" >}}
As the Margin field demonstrates, translating from an Excel formula to a FileMaker calculation is usually a seriously easy operation. FileMaker's calculation language is very similar to Excel's. To make your life easy, keep these things in mind (and don't be afraid to consult the FileMaker help file or your favorite FileMaker book — some of these topics are beyond the scope of this article):

- Cell references are usually replaced with field names. In most spreadsheets that make sense as a database, this is a one-to-one process. But if your formula referrs to cells on several different rows, you might be in trouble. If every record should share one value, use a Global Field. Otherwise, you may be swimming upstream. FileMaker is not a spreadsheet, and some jobs just make more sense in Excel.

- If a row in your spreadsheet uses summarization functions (`SUM()`, `AVERAGE()`, `COUNT()` etc...) across all rows, use a Summary field. Summary fields support all the same operations, and have loads more power if you also use Sub-Summary and Trailing Grand Summary parts.

- Excel's `AND()` function doesn't translate to FileMaker as you might expect. While in Excel you would say `AND(F1>10, F1<100)`, FileMaker expects something like `F1 > 10 and F1 < 100.` Just string together as many comparisons as you need, with "and" betwen each one. The same goes for `OR()`.

- Unlike Excel's one-line input box, FileMaker's calculation window offers up a huge amount of space to work with. Use it. You can add extra space and blank lines anywhere you want in a calculation as long as it isn't in the middle of a field or function name. So space things out, use multiple lines, and indent as you see fit. You can even add comments anywhere in a calculation using special symbols like this: `/* this is a comment */`

- If you've ever battled a complex formula with lots of nested `IF()` functions in Excel, you'll appreciate the Case function in FileMaker. It lets you consider an unlimited number of conditions with no nesting at all.

- Most Excel functions have a FileMaker equivalent with a very similar name (often the same name). The list in the top-right corner of the Define Calculation window lists all of FileMaker's functions. Use the pop-up menu above this list to focus on a single category of functions. You can even add your own functions to FileMaker using FileMaker Advanced and the Define → Custom Function menu command.

- Just like Excel, FileMaker calculations aren't limited to numbers. You can create dynamic text values that change based on data, calculate future due dates, and more. FileMaker can even use pictures, PDFs, and other data in Container fields as the result of a calculation.
{{< /aside >}}

If you're using a fresh install of FileMaker, chances are the Margin field is now on the layout to the right of Cost. But if you've made changes to FileMaker's preferences, you may need to add the field to the layout yourself. Either way, you'll need to tell FileMaker this field should hold a percentage.

First, switch to Layout Mode again. If the Margin field isn't already there, you can add it most easily by making a copy of the Cost field and switching its field setting. With the {{< kbd char="Option" >}} (Mac) or {{< kbd char="Control" >}} (Windows) key held down, drag the Cost field down a few notches. When you release the mouse, FileMaker will ask you what field you want to show. Choose the Margin field from the list.

To change the Margin field to a percentage, select it and choose Format → Number... again. Turn on "Format as decimal" and "Fixed number of decimal digits" as before. This time, though, choose Percent from the "Use notation" pop-up menu. Click OK.

If you switch to Browse Mode, you'll see your Margin field properly placed and formatted. If you change the Price or Cost on a product record, the Margin will automatically recalculate just like the Excel original.

## Non-Data

The top-right corner of your spreadsheet shows something called the Pricing Tool. This isn't really data at all. Instead, it is a little tool to help you decide on a price. You type in the cost of a product, and your desired margin, and it tells you the price you need to charge. At first glance, you might think this simply doesn't fit in FileMaker. But the truth is, FileMaker's ability to add actual functionality (tools, automated processes) to a database is vast.

There are a dozen ways to add a similar pricing tool to your FileMaker database, but here you'll use the most Excel-like method. As you become more familiar with FileMaker, you could improve this functionality using scripting — something that is easier than you would think.

The cells in the Pricing Tool allow you to enter data, so it makes sense that they should be fields. But they don't hold attributes of any particular thing (you don't have pricing tool fields for every product). Instead, they have only one value each no matter how many records you add to your database. As such, they're a perfect candidate for Global fields — special fields that have only one value for all records.

Choose File → Define Database and switch to the Fields tab. You need to add three global fields. The first two (Pricing Tool Cost and Pricing Tool Margin) will accept user input. The third (Pricing Tool Price) will be a calculation based on the others.

In the Field Name box, enter Pricing Tool Cost. From the Type pop-up menu, choose Number. Then click Create. Finally, click the Options button. In the window that appears, switch to the Storage tab. Here, turn on "Use global storage (one value for all records)." This turns the field into a Global field.

Repeat these steps again, this time naming the new field Pricing Tool Margin.

Now add a third new field called Pricing Tool Price. This time, though, choose Calculation from the Type pop-up menu. When the Define Calculation dialog box appears, enter this calculation:

```text
Pricing Tool Cost * Pricing Tool Margin + Pricing Tool Cost
```

Before you click OK, click Storage Options and turn on "Use global storage" for this field as well. Now click OK a few times until you return to your database window. Now switch to Layout Mode. If FileMaker added the three new fields to the layout, move them one-by-one into the Header. If they were not added, add them yourself just like you did the Margin field. This time, though, move them all into the Header part.

You can arrange these fields however you like, and add text labels as appropriate. For example, you might arrange them something like this:

> Pricing Tool: [COST FIELD] [MARGIN FIELD] = [PRICE FIELD]

Don't forget to use the Format → Number command to format each field appropriately. Also, note that you can control the background of a field just like you did the Header part. Finally, you can add borders to a field using the Format → Field/Control → Borders menu command. When you switch back to Browse Mode, your pricing tool should be fully operational.

## Above and Beyond

You now have a FileMaker database that closely matches the original Excel spreadsheet. It is already better than the spreadshet in many ways. It can hold more data (Excel's 65,000 row limit is downright paltry when you consider that FileMaker can easily hold millions of records). FileMaker's sorting (Records → Sort Records...) and finding (View → Find Mode) capabilities far exceed Excel's. When it comes to scientific data, FileMaker's 400 decimal places of precision put Excel to shame.

But these statistics belie the bigger picture. A FileMaker database is far more than a spreadsheet. Choose View → View as Form and you'll see that your spreadsheet list of rows instantly turns to a one-page-at-a-time view more suitable for large amounts of data. In Layout Mode, you can even make entirely new layouts (Layout → New Layout) to display the same data in totally different ways. Why not print a product flyer right from FileMaker? Just make a layout that is as big as a single page and arrange the data appropriately, including another text field for marketing text, and a Container type field for a picture of the product.

When you're ready to add Customer and Order tracking to your database, you just add a few more tables with their fields. You can then wire the tables together in the Relationships tab of the Define Database window — tell FileMaker that a customer record is associated with one or more order records, and that each line item on an order ties to one product in the products table. Now FileMaker can display related data side by side (a list of orders on the Product layout, for example) and completely irradicate duplicate data entry.

And when your business really starts to grow, you can add scripts to automatically email sales receipts to your customer with the click of a button, or generate purchase orders for new inventory when stocks run low.

Finally, with a second (or third, or 150th) copy of FileMaker, you can have multiple people all working in your database at exactly the same time. No more yelling across the office to ask someone to close the spreadsheet. FileMaker is designed from the ground up to support muliple users.

In short, FileMaker lets you build a real business application, Managing data is just the first step. And as an Excel wizard, you're well positioned to tackle the data management side of FileMaker in stride — and move on to the more exciting stuff.
