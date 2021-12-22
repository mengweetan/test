import requests



apiKey="24S479QJGFENICJRC6GPCMMEH9P1VP4RYM"
addresses = ["0x123d475e13aa54a43a7421d94caa4459da021c77","0x0020c5222a24e4a96b720c06b803fb8d34adc0af","0xfe808b079187cc460f47374580f5fb47c82b87a5"]
#uri = f"https://api.bscscan.com/api?module=account&action=balancemulti&address={addresses}&tag=latest&apikey={apiKey}"



for address in addresses:
    uri = f"https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c&address={address}&tag=latest&apikey={apiKey}"
    res = requests.get(uri)
    print (address+" "+res.json().get('result'))
