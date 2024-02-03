---
author: 'Marcus Vinicius Richa'
title: 'Upgrading Debian OS -  Linux Administration'
date: '2024-02-03'
subject: 'misc-articles'
description: 'Updating and Upgrading the Debian Linux system between new distro versions.'
---

#  Upgrading the Debian OS -  Linux Administration

1. ##### Testing the Linux OS System - Basic Configuration
2. ##### Upgrading the Debian System i
  2.1. Debian Main Packaging Management Tools   
  2.2. Understanding The /etc/apt/sources.list File
3. ##### Upgrading from Debian 11 (Bullseye) to Debian 12 (Bookworm)
4. ##### 
	4.1.       
	4.2.      
5. ##### Troubleshooting 
6. ##### Further Reading     
7. ##### References


### Introduction

#### Testing the Linux OS System - Basic Configuration

With the command **lsb_release -a** it is possible to retrieve information about the distribution being used.

```
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 12 (bookworm)
Release:	12
Codename:	bookworm
``` 

- _**Note**_: see that the **-a** parameter stands for **all**, meaning that it conveys all the other parameters information together: version, ID, description, release, codename, etc.


Following, it's possible to retrive also information about the system and its architecture with **uname -mrs**

```
Linux 6.1.0-17-amd64 x86_64
```

Here, it was specified information from the machine (_-m_), kernel release (_-r_) and kernel name (_-s_).


Finally, it's also possible to retrieve the current version of the Debian installed junt printint the file _/etc/debian_version_ into the terminal output: **cat etc/debian_version**

```
12.4
```


### Upgrading the Debian System

#### Debian Main Packaging Management Tools

1. **dpkg**
2. **APT**


The framework **dpkg** is the main management tool for the Debian system, which is used as the funtionalty by the other high level programs and interfaces. Use _dpkg --help_ for more information.


The APT interface on the other hand, is a advanced interface for the Debian package system, which has an original program called **apt-get** and also a new binary **apt** (lauched with Debian ver 8, Jessie).


So, as it was seeem, the **apt-get** itself utilizes the framework **dpkg** in its works, but differrent from the later, it does not works with _.deb_ files, and it has to be configured using the specifications from the file _/etc/apt/sources.list_.


According to the manual, [Capítulo 8. As ferramentas de gestão de pacotes Debian](https://www.debian.org/doc/manuals/debian-faq/pkgtools.pt.html), this new binary **apt** merges both **apt-get** and **apt-cache** functionalities from the original APT interface, besides inserting a users friendly formatting system with colors and better spacing:

```
 apt-get update             ->  apt update
 apt-get upgrade            ->  apt upgrade
 apt-get dist-upgrade       ->  apt full-upgrade
 apt-get install package    ->  apt install package
 apt-get remove package     ->  apt remove package
 apt-get autoremove         ->  apt autoremove
 apt-cache search string    ->  apt search string
 apt-cache policy package   ->  apt list -a package
 apt-cache show package     ->  apt show package
 apt-cache showpkg package  ->  apt show -a package
```

_"A ferramenta apt funde a funcionalidade do apt-get e apt-cache e por predefinição tem um formato colorido e bonito para os resultados, tornam-do-o mais agradável para humanos. Para utilização em scripts ou casos de utilização avançada, ainda é preferido ou necessário o apt-get."_


Some examples from the manual:

1. Use **apt update** to update the _list of packeges_ known by the system.
2. Use **apt install <name-of-package>** to install a singular package with all its dependencies.
3. Use **apt remove <name-of-packate>** to remove only the package from the system.
4. Use **apt purge <name-of-package>** to remove both the package and configuration files from the system.
5. Use **apt lists --upgradable** to list all the new packages versions which are available.
6. Use **apt upgrade** to update all new package version into the system, without installing or remove any new packages.
7. Finally, use **apt full-upgrade** for upgrading all available new packages into the system, including new packages installations or removal.


According to the same manual:

_"O comando upgrade mantém um pacote na sua versão obsoleta instalada se a actualização precisar da instalação de um pacote extra, para que seja satisfeita uma nova dependência. O comando full-upgrade é menos conservativo."_



#### Understanding The /etc/apt/sources.list File

The main *apt* sources configuration file are at: _*/etc/apt/sources.list*_

- Atention: while setting the distribution cofiguration at this file, it's possible to use either the code name or a class reference, like stable, testing, unstable, etc. But the Debian Wiki makes a direct warning about using a reference to _stable_ because it can mess with the packages reference tree:

_"Avoid using stable in your sources.list as that results in nasty surprises and broken systems when the next release is made; upgrading to a new release should be a deliberate, careful action and editing a file once every two years is not a burden."_


An example for _/etc/apt/sources.list_ with the Debian 12 (Bookworm stable): [SourcesList - Debian Wiki]

```
deb http://deb.debian.org/debian bookworm main
deb-src http://deb.debian.org/debian bookworm main

deb http://deb.debian.org/debian-security/ bookworm-security main
deb-src http://deb.debian.org/debian-security/ bookworm-security main

deb http://deb.debian.org/debian bookworm-updates main
deb-src http://deb.debian.org/debian bookworm-updates main
```


Now, a example also using the _contrib_, _non-free_ and _non-free-firmware_ components: [SourcesList - Debian Wiki]

```
deb http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware

deb http://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian-security/ bookworm-security main contrib non-free non-free-firmware

deb http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware
deb-src http://deb.debian.org/debian bookworm-updates main contrib non-free non-free-firmware
```

- _**Notes**_:   
1. The first item of each pair repository marked as **deb** indicates the pre-compiled packages that are normally used by the installation, and the second item, **deb-src**, indicates the _source packages_, which are the original program sources plus the Debian control file (.dsc) and the diff.gz containing the changes needed for packaging the program.   
  1.1. _"deb-src lines are relative to source packages (as downloaded by apt-get source $package) and next compiled. Source packages are needed only if you want to compile some package yourself, or inspect the source code for a bug. Ordinary users don't need to include such repositories."_ [The difference between deb versus deb-src in sources.list - Unix & Linux](https://unix.stackexchange.com/questions/20504/the-difference-between-deb-versus-deb-src-in-sources-list)
2. From the _nixCraft_ site, _How to enable contrib repo on Debian Linux 10/11/12_:   
  2.1. _"Sometimes, when you try to install specific Debian Linux packages, you might encounter an error message that reads:
Unable to locate package pkg-name-here
In many cases, the required package might already be present in the remote download repos. It would be best to have an additional repository, such as contrib, which adds extra packages to the core Debian Linux system. To enable and use the contrib repository in Debian Linux version 10/11/12 or newer versions, follow the instructions below."_ [How to enable contrib repo on Debian Linux 10/11/12](https://www.cyberciti.biz/faq/enabling-contrib-repo-in-on-debian-linux/)
3. Also from the _nixCraft_ site, _A note about the non-free-firmware repo_:   
  3.1. _"If you intend to use Debian 12 on either a desktop or server that requires non-free firmware for hardware such as WiFi, GPU, Sound, Nvida/AMD GPU, NIC and more, it is recommended to include the non-free firmware repository. Below is the updated file /etc/apt/sources.list file. The orange color repo config indicates that non-free firmware is required for your hardware. If you’re unsure about your hardware, I suggest adding those repositories."_
 



### Upgrading from Debian 11 (Bullseye) to Debian 12 (Bookworm)

- _**Note from the nixCraft site**_:
- _"Just to be clear, it is not possible to upgrade from Debian Linux version 10 directly to version 12. You will need to go through the Debian 10 to 11 upgrade first, and then upgrade from version 11 to version 12."_ 


As the site states, the procedure is as follows:

1. Backup the system
2. Update existing packages and reboot the Debian 11 system and reboot the system:   
  2.1. **sudo apt update**   
  2.2. **sudo apt upgrade**   
  2.3. **sudo apt full-upgrade**   
  2.4. **sudo apt --purge autoremove**   
  2.5. **sudo systemctl reboot**
3. Edit the file _/etc/apt/sources.list/_ using a text editor and replacing each instance of:   
  3.1. **bullseye** to **bookworm**   
  3.2. **bullseye-updates** to **bookworm-updates**   
  3.3. **bullseye-security** to **bookworm-security**
4. Update the packages index for the new Debian version (**Do not fortget**):  4.1. **sudo apt update**.
5. Prepare for the operating system minimal system upgrade: **sudo apt upgrade --without-new-pkgs**.
6. Finally, update Debian 11 Bullseye to Debian 12 Bookworm: **sudo apt full-upgrade**.
7. Reboot the Linux system so that it can be boot into the new Debian 12 Bookworm.
8. Finally, verify that everything is working correctly:   
  8.1. **uname -mrs**   
  8.2. **lsb_release -a**   
  8.3. **cat /etc/debian_version**
 

In terms with the **step 2**, the site adverts that there may be compability problems concerning to _third-party_ programs installed in the system during the system upgrade between distros.


So, in order to avoid that, the user should uninstall those non-Debian packages, and reinstall them after the system complete upgrade. The _nixCraft_ the site also gives these these insight on how to search for those _third-party_ packages: 

1. **sudo apt list '?narrow(?installed, ?not(?origin(Debian)))'**
2. **sudo apt-forktracer | sort**

```
brave-browser/stable,now 1.62.156 amd64 [installed]
brave-keyring/stable,now 1.16 all [installed,automatic]
```

- _**Note**_: 
- Observe that the site has restricted the output from **sudo apt list**, because it returns all the packages available, including those which are not installed yet.
- Also note that the same filtered output with only installed packages could have been got with **dpkg -list**.


Now, in terms with the **step 5**, that is, _The Minimal System Upgrade_, the site explains that a two-part process is necessary to avoid removing large numbers of packages that the user wants to keep. 


Another **very important issues** present in these current step are:
1. To mind all the necessary restarts from the services which are alerted by the upgrade process.
2. Determ how the upgrade process should proceed with the **Grub** installation.  
  2.1. And here, the _nixCraft_ site suggests **keeping the local version currently installed**:

_"Here is another example, about GRUB package. A new version (/tmp/grub.nSxPVErDRh) of the configuration file /etc/default/grub is available, but the version installed currently has been locally modified. What do you want to do about the modified configuration file grub? Again review all options carefully. I typically chose the “keep the local version currently installed”_ [How to upgrade Debian 11 to Debian 12 bookworm using CLI](https://www.cyberciti.biz/faq/update-upgrade-debian-11-to-debian-12-bookworm/)


Finally, the _nixCraft_ site stress about the importance of the second part of the upgrade, that is the full upgrade from the **step 6**: 

_"To fully update from Debian 11 to Debian 12, it’s necessary to make complete upgrades, rather than just minimum ones. This step is crucial for the upgrade process. To do this, enter the following command to ensure that the latest versions of all packages are installed and any potential dependencies are resolved."_


Once again the user may be prompted to suggest about configuration options, like OpenSSH, for example. And at the end of all this process, the site adverts that it should be important to check the connection with the remote server, for those that are using this kind of connection:

```
sudo sshd -t
```

So, the site suggests this: 

- _"If there are no errors, you can proceed with rebooting the system. However, if there are any errors, it is important to fix them before rebooting. To do so, run"_

```
sudo vim /etc/ssh/sshd_config
```

And then another verification for the fixes made:

```
sudo sshd -t
```

So, only them should the user reboot the system:

```
sudo systemctl reboot
```


### Troubleshooting

There was a **issue with the version upgrade of my notebook Lenovo** which has an Linux Recovery Image pre-installed which may have prevented the upgrade to fully upgrade with the Linux 12 Bookworm new Kernel (6.0).


Another **issue from the same upgrade above** was that the new installation lost the specific configuration for the keyboard for the 14" Notebook which could no longer accept the marked default reading from the configuration system at the _**/etc/default/keyboard**_ file.





### Further Reading

- [The Debian GNU/Linux FAQ](https://www.debian.org/doc/manuals/debian-faq/)

- [APT User's Guide](https://www.debian.org/doc/manuals/apt-guide/index.en.html)

- [The Debian Administrator's Handbook Next Debian 11](https://www.debian.org/doc/manuals/debian-handbook/index.en.html)

- [Securing Debian Manual 3.19](https://www.debian.org/doc/manuals/securing-debian-manual/index.en.html)


### References

- [Chapter 9. Keeping your Debian system up-to-date - Debian Docs](https://www.debian.org/doc/manuals/debian-faq/uptodate.en.html)

- [SourcesList - Debian Wiki](https://wiki.debian.org/SourcesList)

- [The Debian Archive](https://www.debian.org/doc/debian-policy/ch-archive.html)

- [How to upgrade Debian 11 to Debian 12 bookworm using CLI](https://www.cyberciti.biz/faq/update-upgrade-debian-11-to-debian-12-bookworm/)

