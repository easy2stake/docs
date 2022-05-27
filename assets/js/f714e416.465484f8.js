"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[509],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),c=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?s.createElement(g,r(r({ref:t},u),{},{components:n})):s.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var s=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={},o="Setting Up Your Node As A Background Process With SystemD",c={unversionedId:"nodes/systemd",id:"nodes/systemd",title:"Setting Up Your Node As A Background Process With SystemD",description:"SystemD is a daemon service useful for running applications as background processes.",source:"@site/docs/nodes/systemd.md",sourceDirName:"nodes",slug:"/nodes/systemd",permalink:"/nodes/systemd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/systemd.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Resources",permalink:"/category/resources"},next:{title:"Using the Cel-Key Utility",permalink:"/nodes/keys"}},u={},d=[{value:"Consensus Nodes",id:"consensus-nodes",level:2},{value:"Start the Celestia-App with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Data Availability Nodes",id:"data-availability-nodes",level:2},{value:"Celestia Full Storage Node",id:"celestia-full-storage-node",level:3},{value:"Celestia Bridge Node",id:"celestia-bridge-node",level:3},{value:"Celestia Light Node",id:"celestia-light-node",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setting-up-your-node-as-a-background-process-with-systemd"},"Setting Up Your Node As A Background Process With SystemD"),(0,l.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,l.kt)("h2",{id:"consensus-nodes"},"Consensus Nodes"),(0,l.kt)("p",null,"If you are running a validator or consensus full node, here are\nthe steps to setting up ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-appd")," as a background process."),(0,l.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the Celestia-App with SystemD"),(0,l.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,l.kt)("p",null,"Create Celestia-App systemd file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-appd.service\n[Unit]\nDescription=celestia-appd Cosmos daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia-appd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,l.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-appd.service\n")),(0,l.kt)("p",null,"Enable and start celestia-appd daemon:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-appd\nsystemctl start celestia-appd\n")),(0,l.kt)("p",null,"Check if daemon has been started correctly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-appd\n")),(0,l.kt)("p",null,"Check daemon logs in real time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-appd.service -f\n")),(0,l.kt)("p",null,"To check if your node is in sync before going forward:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s localhost:26657/status | jq .result | jq .sync_info\n")),(0,l.kt)("p",null,"Make sure that you have ",(0,l.kt)("inlineCode",{parentName:"p"},'"catching_up": false'),", otherwise leave it running\nuntil it is in sync."),(0,l.kt)("h2",{id:"data-availability-nodes"},"Data Availability Nodes"),(0,l.kt)("h3",{id:"celestia-full-storage-node"},"Celestia Full Storage Node"),(0,l.kt)("p",null,"Create Celestia Full Storage Node systemd file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-full.service\n[Unit]\nDescription=celestia-full Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia full start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,l.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-full.service\n")),(0,l.kt)("p",null,"Enable and start celestia-full daemon:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-full\nsystemctl start celestia-full && journalctl -u \\\ncelestia-full.service -f\n")),(0,l.kt)("p",null,"You should be seeing logs coming through of the full storage node syncing."),(0,l.kt)("h3",{id:"celestia-bridge-node"},"Celestia Bridge Node"),(0,l.kt)("p",null,"Create Celestia Bridge systemd file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,l.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,l.kt)("p",null,"Enable and start celestia-bridge daemon:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-bridge\nsystemctl start celestia-bridge && journalctl -u \\\ncelestia-bridge.service -f\n")),(0,l.kt)("p",null,"Now, the Celestia bridge node will start syncing headers and storing blocks\nfrom Celestia application."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: At startup, we can see the ",(0,l.kt)("inlineCode",{parentName:"p"},"multiaddress")," from Celestia Bridge Node.\nThis is ",(0,l.kt)("strong",{parentName:"p"},"needed for future Light Node")," connections and communication between\nCelestia Bridge Nodes")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"NODE_IP=<ip-address>\n/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,l.kt)("p",null,"You should be seeing logs coming through of the bridge node syncing."),(0,l.kt)("h3",{id:"celestia-light-node"},"Celestia Light Node"),(0,l.kt)("p",null,"Start the Light Node as daemon process in the background"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia light start --core.grpc <ip>:9090\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,l.kt)("p",null,"If the file was created succesfully you will be able to see its content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,l.kt)("p",null,"Enable and start celestia-lightd daemon:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-lightd\nsystemctl start celestia-lightd\n")),(0,l.kt)("p",null,"Check if daemon has been started correctly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-lightd\n")),(0,l.kt)("p",null,"Check daemon logs in real time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-lightd.service -f\n")),(0,l.kt)("p",null,"Now, the Celestia Light Node will start syncing headers.\nAfter sync is finished, Light Node will do Data Availability\nSampling (DAS) from the Bridge Node."))}m.isMDXComponent=!0}}]);