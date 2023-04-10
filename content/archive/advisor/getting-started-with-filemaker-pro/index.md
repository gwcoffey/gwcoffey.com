---
title: "Getting Started with FileMaker Pro"
date: 2009-05-17
archive: advisor
tags: 
  - Archive Post
---

FileMaker Pro is a big product, and its easy to get caught up in all the new features, power techniques, and advanced scripting mojo. But new users shouldn't lose sight of the fact that FileMaker is designed to be as easy as it is powerful. Like anything new, there's a learning curve, but an untrained user can be more productive more quickly in FileMaker than in any other database program around. In this article you'll learn how to build a simple FileMaker database from scratch. You'll start the way the pros do, by analyzing your problem and making a few important decisions. Then you'll dive in and build a database that really works.

## Understand the Problem

You wouldn't be building a database if you didn't have some kind of problem. Maybe you need to keep track of the work you do so you can be sure you get paid. Or maybe you're planning a wedding and you don't want to lose track of what's done and what's left to do. The real power of a developer tool like FileMaker is that you can solve just about any kind of problem. FileMaker Pro provides the foundation upon which you can build the tools you need to track more accurately, work more efficiently, and report more thoroughly.

But before you create your first field, before you design your first layout, you need to really understand your problem. If you don't, you'll inevitably end up building the wrong solution. Then, in a few months when you figure out what you really need, you'll have to start all over again. And so, the first part of any FileMaker development project is to *analyze the problem*.

Professional FileMaker developers ask a lot of questions as they try to understand what their customers need. If you're building a database for yourself, you should be asking questions too:

 - What kind of information am I keeping track of? What do I need to know about these things?
 - How will I use the information? Will I perform calculations, calculate scores, or analyze data? Am I building a reference I'll refer to time and time again?
 - Where does the information come from? Will I be importing data from another system? Will I be typing the data in directly? Will other people be using my database too?

As you think about these questions, take notes. Be especially aware of the nouns — the things you mention as you think about what you want to keep track of. If you'll be importing data from another system, analyze that system (or the export file you get). Find out what kinds of data it includes. You cannot possibly arm yourself with too much information.

## Problem: Recruiting a New Employee

Imaging you are a small business owner (if you're using FileMaker, there's a decent chance you are). You have decided it's time to add a new employee. If you're like a lot of people, this is a major problem: finding and recruiting the right person is time consuming. It involves a lot of information. And it is exceptionally important that you do a good job.

You know you'll go through 20 or more candidates before you make your final choice, and you know you'll do the same thing all over again when the time comes to grow a little more. So you decide you'll use FileMaker to help streamline the process.

This is where the questions come in. What are you keeping track of? Candidates. What do you want to know about them? It might help to make a list:

 - resume
 - goals
 - salary expectations
 - relevant work experience
 - interview dates and notes
 - decisions (call? interview? offer a job?)

You know you'll use this database as a reference. When, after a well-deserved weekend of rest, you need to schedule follow-up interviews, you need to remember who's who.

Finally, you realize most of the data will be manually keyed in. But the resume will be supplied by the candidate, and it should be stored in the database too.

## Building the Tables and Fields

Once you've asked the right questions, you're ready to build the core of your database. A lot of people find this part nerve-wracking. But you can rest easy. You've done your homework, and FileMaker is quite forgiving. If you need to make changes later (after you've added a few candidates and done a few interviews) you can. As long as your core assumptions are sound, your database can grow with your needs for many years.

The simplest databases have only one table. In other words, they store information about one thing — Candidates in this case. You can add as many fields as you want to that table. Each field holds one particular attribute about a candidate, like their name, phone number, or the notes you take during the interview. So your first decision is what fields you need in your table. There's no need to write things down at this point. FileMaker's friendly interface is a great place to brain storm your fields, and tweak until you get things just the way you want.

{{< steps >}}

{{< step "Launch FileMaker Pro and choose File → New Database." >}}
If you see the FileMaker Quick Start window, choose "Create an empty database" and then click OK. You will then be asked where to save your database and what to call it. But depending on how FileMaker is configured, you might skip right to the naming and saving part.
{{< /step >}}

{{< step "Name your database "Hiring.fp7" and save it in the location of your choosing." >}}
FileMaker creates your database file where you said to, and shows you Manage Database window (Figure 1).
{{< /step >}}

{{< /steps >}}

{{< figure
    title="Figure 1"
    src="COFFG10A.png"
    width="748"
    height="568"
    alt="FileMaker's Manage Databse window. It has three top level tabs: \"Tables\", \"Fields\" and \"Relationships\". \"Fields\" is currently selected. There's space for a list of fields, but it is currently empty."
    caption="In the Manage Database window, you create tables, fields, and relationships, and set various field options. You can return to this dialog box any time by choosing File → Manage → Database." >}}

Any time you set out to add a field, you need to pick a field type. FileMaker offers several field types, most of which are self-explanatory:

 - Choose "Text" for fields that hold any kind of text value, like a name, a note, or a product description.

 - Choose "Number" for fields that hold plain numbers, like a price, quantity, age, or size. Bear in mind, though, that just because something is called a number doesn't necessarily mean it is one. For instance, a phone number isn't a simple number, so you should use a Text field for phone numbers. Zip or postal codes are another source of confusion. Since they have leading zeros, and sometimes punctuation or spaces, they are text values too. Only use the Number type when you have a single, simple number.

 - Choose "Date" if you want to store a date, like a birthdate, or the date an order was placed.

 - Choose "Time" to record the time of day, like the time a measurement was taken, or an elapsed time, like how long it took to finish a task.

 - Choose "Timestamp" to record both a date and a time. Timestamps are easier to work with than separate date and time fields if you are really recording the exact date and time something happened, like an appointment, or the moment a record was created.

 - Choose "Container" to store a document or picture, like a person's resume, the draft of an article, or an employee photo.

To get started, you'll need a place to record each candidate's name, so you should add a First Name field and a Last Name field. (See the sidebar Choosing Fields for details). 

{{< aside title="Choosing Fields" >}}
One of the trickiest tasks for new FileMaker developers is deciding exactly which fields to create. For instance, should you add a field called Name, or two fields for first and last name? Should you add one Notes field, or separate fields for notes on qualifications, communication skills, and hiring recommendations?

The first answer is "It's up to you." You are the one who will use this database, and only you know for sure what you plan to do with it. But it can be hard to know what choices to make if you're not an experienced FileMaker developer. Here are some points to keep in mind:

When deciding between two fields vs. one field, bear in mind that it is always easier to put two values together than it is to take them apart. For instance, if you have just a Name field, and for some reason you need a list of last names, you'll be out of luck. So if the last name is important to you on its own, you should put it in a field of its own.

On the other hand, the more places you have to put things, the more rigid your database becomes. For instance, if you have three notes fields, you might find that none of them is just the right spot for a new piece of information. And later, when you search your notes, you may not know which one to search. Putting all your notes in one place may prove more flexible and easier to use. This is especially true since you are unlikely to need to share the notes with another company or software program.
{{< /aside >}}

To add your first fields, first make sure you're on the Fields tab in the Manage Database window. This is where FileMaker takes you when you first create your database, so you should be there already.

{{< steps >}}

{{< step "Enter \"First Name\" in the Field Name box." >}}
FileMaker uses a "describe it then create it" model so you need to name your field *before* you create it.
{{< /step >}}

{{< step "Choose \"Text\" from the Type pop-up menu." >}}
This is the default so it's probably already selected.
{{< /step >}}

{{< step "Click Create." >}}
FileMaker adds the "First Name" field to the field list at the top of the window.
{{< /step >}}

{{< /steps >}}

FileMaker shows every field in a list. Up to this point, you had no fields, so the list was empty. But once you click Create, your field as added to the list, and your database is officially under way.

Repeat the steps above to add a second text field, but this time name it "Last Name."

After a little more thinking, you decide on a few more fields. You can see all the fields you should add in Figure 2.

{{< figure
    title="Figure 2"
    src="COFFG10B.png"
    width="748"
    height="568"
    alt="The Manage Database window now has these fields and types: \"First Name\" (text), \"Last Name\" (text), \"Phone Number\" (text), \"Email Address\" (text), \"Resume\" (container), \"Notes\" (text), \"Phone Interview Appointment\" (timestamp), \"On Site Interview Appointment\" (timestamp)."
    caption="This is how your field list will look when you finish adding fields. You can see the name of each field, and its type." >}}

When you're finished adding fields, click OK to close the Manage Database window. FileMaker shows you a plain-vanilla database like the one in Figure 3.

{{< figure
    title="Figure 3"
    src="COFFG10C.png"
    width="521"
    height="484"
    alt="A window with a plain white background and eight input fields. Each field has a label in black boldface text. The names match what was shown in the Field list in Figure 2. Most fields are big enough for one line of text, but the Resume field is a large rectangle as tall as it is wide."
    caption="FileMaker shows all your fields like this. Already, your database is ready to start receiving data. But most people choose to customize the look of their database first." >}}

## Designing Layouts

Tables and fields are all about the data you store in your database. But FileMaker has a second concept, called Layouts, where you decide how all this data is presented. You can build layouts that show your data in a list view, with many records on the screen at once. You can also build layouts that allow you to focus on a single record, and see lots of detail like scrollable blocks of text, and even on-screen buttons. You also use layouts to build printable reports. In fact, although you start out adding fields and tables, you'll spend most of your FileMaker energy working on layouts. 

The database you just created already has one layout, called Hiring (FileMaker named it after your database). To edit this layout, choose View → Layout Mode. When you switch to Layout mode, FileMaker adds new tools, menus, and on-screen indicators to help you design your database's look and feel. In fact, if you've ever used a drawing program on your computer, FileMaker's Layout mode should feel very familiar:

 - To move something (like a field or its label) just click and drag with your mouse. You can put anything anywhere you want.
 - To resize something, first click to select it, then drag one of its corners (FileMaker puts little black "handles" on each corner to help you find the spot). You can make fields wider or narrower, and taller or shorter.
 - To change fonts, colors, borders, and so on, select an item, then visit the Format menu. You can turn your fields blue, or change the text to the font of your choosing.

Using these skills, re-arrange the fields on your layout to match Figure 4. This version has the extra space for the Notes field, and a more organized arrangement. While you're at it, select each field (you can Shift-click to select them all at once) and turn on field borders by choosing Format → Field/Control → Borders.

{{< figure
    title="Figure 4"
    src="COFFG10D.png"
    width="863"
    height="540"
    alt="The window has the same fields but they have been arranged more intelligently. The Notes fiels is now large enough to hold a couple of paragprahs. And the names, phone number, and email are together in a sensible cluster."
    caption="After a little rearranging, your database starts to look more like something you would want to use. If you're the artistic type, feel free to add color, lines and shapes, or even paste in pictures, icons, and other embellishments. The layout is your canvas." >}}

Most database have at least two layouts: A detail layout like the one you just finished shows lots of information about one record. You'll almost certainly want a list layout too, so you can quickly scroll through your candidates and find the one you're looking for.

To make a new layout, choose Layout → New Layout/Report. FileMaker shows the New Layout/Report dialog box, which takes you through a multi-step question and answer process to help streamline the process. For this task, name your layout "List" and choose the "Blank Layout" option so you can build your new layout from scratch. 

When you click Finish, you see your new, empty layout on the screen.

First you need to add fields to the layout. You get to decide which fields you want to see in your list. For this database, you'll add the First Name, Last Name, Phone Number, and Email Address fields to the layout. Choose Insert → Field, select the First Name field from the list that appears, then click OK. FileMaker adds the First Name field to your layout, ready for you to drag in to place. (You can also add a field by dragging the Field tool from the Status toolbar. It acts like a pad of post-it notes: drag to get a new field, and drag again to get another.)

Repeat this process to add the Last Name, Phone Number, and Email Address fields. Then arrange these fields in order from left to right on the layout, forming one row. Position them directly below the dotted line labeled Header on the layout. Put the field labels above the fields (and above the dotted line).

FileMaker layouts are divided into Parts. In Figure 4, you can see three parts on the layout: Header, Body, and Footer. You control how big each of these parts is (and you can add additional specialized part types or edit the parts by choosing Layout → Part Setup.) Each part type has a special (and pretty self-explanatory) purpose for a list-type layout.

 - The Header part shows at the top of the layout, above all the records.
 - The Body part represents one record. When you view your layout as a list, you'll see one copy of this part for every record.
 - The Footer part shows at the bottom of the layout, below all the records.

With this in mind, you can imagine that a layout designed for a list display will typically have a small Body. To resize the Body on your new layout, just click and drag the Body part label straight up so that the Body is just big enough to hold the fields. You can see the result in Figure 5.

Once you've created this layout, you need to tell FileMaker to show it in List view. Switch to Browse mode (View → Browse Mode) and then choose View → View as List.

{{< figure
    title="Figure 5"
    src="COFFG10E.png"
    width="863"
    height="540"
    alt="The window shows the list layout now. The header, body, and footer parts are each about one inch tall. All the fields are in a horizontal row on the body part."
    caption="This is a layout designed for List view. It is short, so several records fit on the screen at once." >}}

Now that you have two layouts, you can switch between them freely. While in Browse mode (View → Browse Mode) you can use the Layout pop-up menu (just below the toolbar) to choose which layout you want to see.

## Using your Database

Believe it or now, you now have a working database. Ready to take it for a spin?

Regardless of the structure of your database, a few key concepts are always the same. First, you create, edit, and delete records (one record for each candidate, in this case). Making a new record is easy. Choose Records → New Record. On screen, every field becomes empty, making new space to enter information about a new candidate. 

Most of the fields are easy to work with: Just click and start typing. The Resume field, though, requires a little explanation. You don't type into this field because it is a Container field, designed to hold a document like the PDF or Word version of the candidates resume. To add a file to this field, first click into the field (not much will happen on the screen, but the field will have a more solid border than all the others). Then choose Insert → File. FileMaker asks you which file you want to store. Once you pick a file, you'll see its name and icon in the field.

Later, when you want to view the resume, you can save it back to your hard drive. Again, click on the field, then choose Exit → Export Field Contents. FileMaker asks you where to put the file. It also offers to "Automatically open file." If you turn this on, FileMaker will open the copy of the file it creates so you can see it easily.

Finally, if you want to get rid of a resume, click in the field and press the Delete or Backspace key on your keyboard.

To see the records you've already created, click the Book icon in the status toolbar. It lets you flip to the next or previous record. In this way you can flip through your records to find the one you're looking for. You can also switch to your List layout, where you can scroll through all the people in your database. If you want to see details about a person, first click on them in the list. You'll see a black line along the left edge of that record, indicating it is selected. If you now switch to your detail layout, that's the record you'll see.

Of course flipping or scrolling through records will only get you so far. Some databases have hundreds, thousands, or even hundreds-of-thousands of records. And even with only a few dozen records, it can be tedious to find just what you want. To help you on your way, FileMaker has Find mode. To get there, choose View → Find Mode. You can tell you're in Find mode because every field has a little magnifying glass in it. In this mode, you don't enter or edit data. Instead, you tell FileMaker what you're looking for, and ask it to find all the matching records. For instance, if you put "Bill" in the First Name field, and then press Enter, FileMaker shows you all the records for people named Bill. Once you've performed a find, you have a found set, which is a subset of the records in your database. You can flip through them or scroll through them, but you'll only see the matches.

When you're done working with a found set, choose Records → Show All Records to see all your records again.

## Where You Go from Here

You've only just scratched the surface of FileMaker's tools and capabilities. From here, you might want to speed up data entry by asking FileMaker to "auto-enter" data in some fields for you, and by using specialized field controls like checkboxes, pop-up menus, and calendar pop-ups. For an even bigger productivity-boost, you can automate common tasks with scripts and buttons. You also might want to print labels, envelopes, or custom reports directly from your database. Finally, you may want to add more tables and track more of your business in your database. To take advantage of these techniques you've got more learning to do. But hopefully you can now see how easy, fun, and productive the process can be.