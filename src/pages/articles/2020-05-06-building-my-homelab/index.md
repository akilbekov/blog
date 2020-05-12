---
date: '2020-05-06'
title: 'Building my homelab'
path: '/posts/2020-05-06-building-my-homelab/'
category: 'Learning'
layout: post
draft: false
description: 'Building my homelab'
#image: './rpm.png'
tags:
  - 'Studies'
  - 'Admin'
  - 'Lab'
---

I've been meaning to write up about building my homelab. Even though on my previous and current jobs I have access to our test labs and networking hardware, there is nothing better to design and build it with your hands. I wanted to play with ELK stack, Splunk ES deployment and to test Windows Lab, to play around with new distros like Clear Linux from Intel, NixOS.

I have started with demoting my trusty NUC6i7KYK 16GB RAM/512GB SSD to be an ESXi host. And recently I've complemented it with 2 x Xeon E5-2658v3 32GB RAM/512 GB SSD.

Energy wise the lab consumes around 200-450 Whr, depending on workload.

Currently I'm using my home Wi-Fi router as switch and firewall. I want to add dedicated switch and firewall(maybe use pfSense/opnSense instead). Also there is a need for better network segmentation. Another thing I've forgot, is to add NICs to my new 2 hosts.
