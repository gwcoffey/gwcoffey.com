{{- $title := .File.Dir 
    | replaceRE `/$` ""
    | replaceRE `.*/` "" 
    | replaceRE `\d+-\d+-\d+-` "" 
    | replaceRE "-" " " 
    | title -}}
---
title: {{ $title }}
date: {{ now.Format "2006-01-02"}}
summary: ''
---

{{"{{"}}< booklist/book
title="{{ $title }}"
author=""
cover="cover.jpg"
format="Print" >{{"}}"}}
