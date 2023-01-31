---
title: "Fixing uninitialized constant MysqlCompat::MysqlRes"
date: 2011-04-07
archive: posterous
---

For reasons I don't fully understand, using ActiveRecord in Rails 2.3 (or at least 2.3.11) with the MySQL gem version 2.8.1 on Mac OS X 10.6 (or at least 10.6.7) produces this error. With other versions of Rails, you may get a different error, but the underlying cause is the same. The internet is rife with suggestions that may or may not be helpful with various version combinations. But none of them helped in my case.

The root cause of this problem is that the MySQL gem is built with a dependency on the MySQL client library by name only. This library is not in a standard library path. So you either need to update your library path to include `/usr/local/mysql/bin` (which is a pain) or fix the gem itself, which I what I decided to do.

Once you have built the gem, you need to find it in the filesystem. For a normal Mac OS X install, it is in `/Library/Ruby/Gems/1.8/gems/`. If you use rvm, it is probably somwehere in `~/.rvm/gems` depending on the gemset you're using. If you're not sure, run:

```
gem env
```

Which will report, among other things, your <samp>GEM PATHS</samp>. Look in each path listed for <samp>mysql-2.8.1</samp>. Once you've found it, run this command, substituting <var>{GEM_PATH}</var> with the path to your gems:

```
install_name_tool -change libmysqlclient.18.dylib /usr/local/mysql/lib/libmysqlclient.18.dylib {GEM_PATH}/mysql-2.8.1/lib/mysql_api.bundle
```

This command rewrites the compiled gem bundle so that its reference to the MySQL client library uses an absolute path. (The path I'm using is the location where MySQL installs its libraries by default if you build from source or use the installer. It is possible you installed it somewhere else.)

Hope it helps.

