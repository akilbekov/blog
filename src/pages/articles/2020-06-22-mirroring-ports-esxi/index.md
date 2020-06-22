---
date: '2020-06-21'
title: 'Mirroring port on ESXi'
path: '/posts/2020-06-22-mirroring-ports-esxi/'
category: 'Learning'
layout: post
draft: false
description: 'Mirroring ports to monitor with IPS/IDS'
tags:
  - 'Studies'
  - 'Admin'
  - 'Lab'
---

When it comes to collecting packets for IDS/IPS tutorials usually recommend using "Promiscous Mode". ESXi has other way to sniff traffic, which can be handy when you want to do it temporarily or targeted.

To configure port mirroring session browse to Distributed Switch ❯ Manage ❯ Settings ❯ Port Mirroring.

![Create port](first.png)

We can choose sources and which traffic to mirror, egress or igress.

![Add sources and which traffic to mirror](second.png)

And finally destination.

![Add](third.png)
