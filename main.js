const ethers = require("ethers");
const abi = [{"inputs":[{"internalType":"string","name":"_extension","type":"string"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"address","name":"_uri","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[],"name":"Migration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"addresses","type":"string"}],"name":"SetAddresses","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"avatar","type":"string"}],"name":"SetAvatar","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"uri","type":"address"}],"name":"SetURI","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"names","type":"string[]"}],"name":"bulkRegister","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string[]","name":"names","type":"string[]"},{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"bulkRegisterAndSend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"changeName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"extension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"p","type":"uint256"}],"name":"f","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getAddresses","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getAvatar","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ravev1","type":"address"},{"internalType":"uint256","name":"startAt","type":"uint256"},{"internalType":"uint256","name":"endAt","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"owned","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"registerName","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"sendTo","type":"address"}],"name":"registerNameAndSend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"addresses","type":"string"}],"name":"setAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"avatar","type":"string"}],"name":"setAvatar","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newUri","type":"address"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"name","type":"string"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uri","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

const reverse = async (address) => {
  const prov = new ethers.providers.JsonRpcProvider('https://rpc.ftm.tools');
  const contract = new ethers.Contract('0x14Ffd1Fa75491595c6FD22De8218738525892101', abi, prov);
  return (await contract.functions.getName(address, 0))[0];
}

const names = async () => {
  const prov = new ethers.providers.JsonRpcProvider('https://rpc.ftm.tools');
  const contract = new ethers.Contract('0x14Ffd1Fa75491595c6FD22De8218738525892101', abi, prov);
  return (await contract.functions.totalSupply())[0];
}

const main = () => {
  const address = document.getElementById('mainaddress');
  const spanAddress = document.getElementById('addressCopy');
  const cAddress = document.getElementById('contractCopy');
  let mod;
  if (address) {
    mod = address;
  } else if (spanAddress) {
    mod = spanAddress;
  } else {
    mod = ".";
  }
  const nav = document.getElementsByClassName('navbar-brand  pt-md-0')[0];
  nav.style = "display: grid; grid-template-columns: auto auto auto;"
  const rave = document.createElement('img');
  rave.src = 'https://rave.domains/RaveBase.png';
  rave.alt = 'Rave Logo';
  rave.style = 'height: 30px; margin-left: 0.5vw;';
  nav.appendChild(rave);
  const powered = document.getElementsByClassName('h5 text-white mb-0 ml-3')[0];
  try { powered.innerHTML = `${powered.innerHTML} and Rave Names`; } catch (e) {};
  const namesRegistered = document.getElementsByClassName('font-size-1 text-uppercase text-secondary mb-0')[5];
  try { namesRegistered.innerHTML = 'Total Rave Names'; } catch (e) {};
  try { names().then(res => {
    document.querySelector('[data-original-title="View All Epochs"]').innerText = res;
    document.querySelector('[data-original-title="View All Epochs"]').href = '/address/0x14ffd1fa75491595c6fd22de8218738525892101';
  }) } catch (e) {};
  if (mod !== ".") {
    try {
      if (address) {
        document.getElementById('icon').src = 'https://rave.domains/RaveBase.png';
      }
      reverse(mod.innerHTML).then(res => {
        if (res) {
          mod.innerHTML = address ? res : `<img style="height: 3vh; width: 3vh; margin-right: 0.5vw;" src="https://rave.domains/RaveBase.png"/>${res}`;
        }
      }).catch(e => console.warn(e) );
      reverse(cAddress.innerHTML).then(res => {
        if (res) {
          cAddress.innerHTML = `<img style="height: 3vh; width: 3vh; margin-right: 0.5vw;" src="https://rave.domains/RaveBase.png"/>${res}`;
        }
      }).catch(e => console.warn(e) );
    } catch (e) { console.warn(e) }
  }
  /*const txns = document.getElementsByClassName('hash-tag text-truncate');
  if (txns) {
    for (let i=0; i < txns.length; i++) {
      console.log(i, txns[i].innerHTML);
      try {
        reverse(txns[i].innerHTML).then(res => {
          if (res) {
            txns[i].innerHTML = `${txns[i].innerHTML} (<a href=${`https://alpha.rave.domains/name/${res.split('.')[0]}`}>${res}</a>)`;
          }
        }).catch(e => console.warn(e) );
      } catch (e) { console.warn(e) }
    }
  }*/
}

window.addEventListener('load', () => {
  setTimeout(() => {
    console.log('RaveFTMScan triggered');
    main();
  },0)
});
