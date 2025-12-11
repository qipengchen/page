
import { BlogPost } from '../types';

export const linuxServerPost: BlogPost = {
  id: "b1",
  title: "Linux Server Configuration Guide",
  date: "January 23, 2025",
  summary: "A quick reference guide for setting up a fresh Linux server, managing users, and securing SSH access.",
  tags: ["Linux", "DevOps", "Tutorial"],
  content: `
This guide covers the essential first steps when configuring a Linux server for research or web hosting purposes.

## 1. Initial System Update
Before installing any dependencies, always ensure your package lists and current software are up to date.

\`\`\`bash
sudo apt update && sudo apt upgrade -y
\`\`\`

## 2. User Management
It is best practice **not** to use the root account for daily operations. Create a new user with sudo privileges.

### Create a new user
Replace \`qipeng\` with your desired username:

\`\`\`bash
sudo adduser qipeng
\`\`\`

### Grant sudo privileges
Add the new user to the sudo group:

\`\`\`bash
sudo usermod -aG sudo qipeng
\`\`\`

## 3. SSH Security Configuration
Securing SSH is critical. We will disable root login and enforce key-based authentication (optional but recommended).

Edit the configuration file:
\`\`\`bash
sudo nano /etc/ssh/sshd_config
\`\`\`

Find and modify the following lines:

- **PermitRootLogin**: Set to \`no\`
- **PasswordAuthentication**: Set to \`no\` (only if you have set up SSH keys)

> **Tip**: Always test your new SSH configuration in a *new* terminal window before closing your current session to avoid locking yourself out!

Restart the SSH service to apply changes:

\`\`\`bash
sudo systemctl restart ssh
\`\`\`

## 4. Basic Firewall (UFW)
Ubuntu comes with UFW (Uncomplicated Firewall). Enable it to allow only necessary ports.

\`\`\`bash
sudo ufw allow OpenSSH
sudo ufw enable
\`\`\`

Now your server is secure and ready for development!
  `
};
