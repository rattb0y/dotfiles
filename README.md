# Rattb0y's Config files
These are my config files btw I am running **Arch Linux**
# Configure pacman
Open the pacman configuration file:
```bash
sudo nano /etc/pacman.conf
```
Uncomment Color to make the output colorful. 

Uncomment ParallelDownloads and set it to 10

After you have done all the changes in the **/etc/pacman.conf** press **Ctrl+O** then **Enter** to save and **Ctrl+X** to exit.

Install **paccache** which is a part of pacman contributed scripts:
```bash
sudo pacman -S pacman-contrib
```
Activate the **paccache** timer:
```bash
sudo systemctl enable paccache.timer
```
Now, paccache will check your package cache directory and clean it if necessary every week.

#AUR Helper
Install **yay**:
```bash
sudo pacman -S --needed base-devel git
mkdir Programs
cd Programs
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```
#Install essential programs
```bash
sudo pacman -S enchant mythes-en ttf-liberation hunspell-en_US ttf-bitstream-vera pkgstats adobe-source-sans-pro-fonts gst-plugins-good ttf-droid ttf-dejavu aspell-en icedtea-web gst-libav ttf-ubuntu-font-family ttf-anonymous-pro jre8-openjdk languagetool libmythes 
```
Install **LibreOffice**
```bash
sudo pacman -S libreoffice-fresh
```
#Install Microcode
**Intel**
```bash
sudo pacman -S intel-ucode
```
**AMD**
```bash
sudo pacman -S amd-ucode
```
#Set up firewall

Install **UFW**:
```bash
sudo pacman -S ufw
```
Enable UFW:
```bash
sudo ufw enable
```
Check UFW's status:
```bash
sudo ufw status verbose
```
Enable UFW to autostart with the system:
```bash
sudo systemctl enable ufw.service
```
# Back up the system

Install **rsync**:
```bash
sudo pacman -S rsync
```
backup everything except for some not necessary files:
```bash
sudo rsync -aAXv --delete --dry-run --exclude=/dev/* --exclude=/proc/* --exclude=/sys/* --exclude=/tmp/* --exclude=/run/* --exclude=/mnt/* --exclude=/media/* --exclude="swapfile" --exclude="lost+found" --exclude=".cache" --exclude="Downloads" --exclude=".VirtualBoxVMs"--exclude=".ecryptfs" / /mnt/backup_destination/
```

