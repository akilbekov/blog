---
date: '2019-02-19'
title: 'Download And Install RPM Packages With Dependencies'
path: '/posts/2019-02-19-download-and-install-rpm-packages-with-dependencies/'
category: 'Learning'
layout: post
draft: false
description: 'Learn how to use yum commands to download and install rpm for offline use'
image: './rpm.png'
tags:
  - 'Linux'
  - 'Admin'
---

Some customers don't have local repos or Internet connection, so it can be troblesome to install packages with dependencies. Then when I saw junior admin installed packages one by one and I thought to myself there must be another way.

After some googling I found yumdownloadonly, yumdownloader. They are part of yum-utils

The following will only download package and dependencies:

```bash
$ sudo yum install --downloadonly --downloaddir=. mariadb-server

Total download size: 21 M
Installed size: 110 M
Background downloading packages, then exiting:
(1/9): perl-Compress-Raw-Zlib-2.061-4.el7.x86_64.rpm   |  57 kB
(2/9): perl-Compress-Raw-Bzip2-2.061-3.el7.x86_64.rpm  |  32 kB
(3/9): perl-DBI-1.627-4.el7.x86_64.rpm                 | 802 kB
(4/9): perl-DBD-MySQL-4.023-6.el7.x86_64.rpm           | 140 kB
(5/9): perl-Net-Daemon-0.48-5.el7.noarch.rpm           |  51 kB
(6/9): perl-PlRPC-0.2020-14.el7.noarch.rpm             |  36 kB
(7/9): perl-IO-Compress-2.061-2.el7.noarch.rpm         | 260 kB
(8/9): mariadb-5.5.60-1.el7_5.x86_64.rpm               | 8.9 MB
(9/9): mariadb-server-5.5.60-1.el7_5.x86_64.rpm        |  11 MB
---------------------------------------------------------------
Total                                          45 MB/s |  21 MB
exiting because "Download Only" specified
```

Then copy to offline machine and run:

```bash
$ sudo rpm -hiv *.rpm

Preparing...                          ######################## [100%]
Updating / installing...
   1:perl-Net-Daemon-0.48-5.el7       ######################## [ 11%]
   2:perl-Compress-Raw-Zlib-1:2.061-4.######################## [ 22%]
   3:perl-Compress-Raw-Bzip2-2.061-3.e######################## [ 33%]
   4:perl-IO-Compress-2.061-2.el7     ######################## [ 44%]
   5:perl-PlRPC-0.2020-14.el7         ######################## [ 56%]
   6:perl-DBI-1.627-4.el7             ######################## [ 67%]
   7:perl-DBD-MySQL-4.023-6.el7       ######################## [ 78%]
   8:mariadb-1:5.5.60-1.el7_5         ######################## [ 89%]
   9:mariadb-server-1:5.5.60-1.el7_5  ######################## [100%]
```

Check if installed correctly:

```bash
$ mysql_secure_installation

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!
```

Success!
