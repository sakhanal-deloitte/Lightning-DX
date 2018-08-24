# Lightning DX

Training materials for lightning training. SFDX will be used for development.

## Initial Setup

Make sure that you have below free/open source softwares installed


* Git https://git-scm.com/downloads

* SFDX CLI https://developer.salesforce.com/tools/sfdxcli

* VS Code https://code.visualstudio.com/download
    * Install Salesforce extensions https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode

* SIGNUP for Salesforce DX trial edition https://developer.salesforce.com/promotions/orgs/dx-signup


Clone the repository
``` 
git clone https://github.com/victorabraham/Lightning-DX.git
```

Navigate to the folder 
``` 
cd Lightning-DX
```

## Deploying Updates to code

Open terminal/command prompt and navigate to Lightning-DX folder and Pull latest code from repository
``` 
cd Lightning-Training
git pull
```

Deploy code to sandbox
```
sfdx force:source:push
```


