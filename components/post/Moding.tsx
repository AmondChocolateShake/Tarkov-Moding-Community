import React from 'react'
import MainWeaponSelect from './MainWeaponSelect';

const ak47u={
  category:'mainWeapon',
  id:'58414a16245977599247970a',
  shortName:'AK-74U',
  fullName:'Kalashnikov AKS-74U 5.45x39 assault rifle Default',
  color:'white',
  iconLink:'https://assets.tarkov.dev/584147732459775a2b6d9f12-icon.webp',
  value:{
    price:24605.0,
    currency:'RUB'
  },
  conflictItems:null,
  ability:{
    ammunitionType:'5.45x39',
    rpm:650,
    ergo:44,
    vertical:121,
    horizontal:415,
    accuracy:null,
    magazineCapacity:null,
    reloadSpeed:null,
    checkDuration:null,
    damage:null,
    penetrationPower:null,
    class:null,
    fragmentationChance:null
  },
  modSlot:[{
      slotName:'reciever',
      capatibleItems:[
        "57dc334d245977597164366f",
        "5839a7742459773cf9693481"
      ],
      item:null
    },
    {
      slotName:'gas_block',
      capatibleItems:["59d36a0086f7747e673f3946"],
      item:null
    },
    {
      slotName:'muzzle',
      capatibleItems:[
      "5ac72e945acfc43f3b691116",
      "5ac7655e5acfc40016339a19",
      "5649aa744bdc2ded0b8b457e",
      "5f633f791b231926f2329f13",
      "5943eeeb86f77412d6384f6b",
      "5cc9a96cd7f00c011c04e04a",
      "615d8f5dd92c473c770212ef",
      "5649ab884bdc2ded0b8b457f",
      "57dc324a24597759501edc20",
      "59bffc1f86f77435b128b872",
      "593d493f86f7745e6b2ceb22",
      "564caa3d4bdc2d17108b458e",
      "57ffb0e42459777d047111c5"],
      item:null
    },
    {
      slotName:'stock',
      capatibleItems:[
        "59ecc28286f7746d7a68aa8c",
        "5ab626e4d8ce87272e4c6e43",
        "57dc347d245977596754e7a1"
      ],
      item:null
    },
    {
      slotName:'pistol_grip',
      capatibleItems:[
        "5f6341043ada5942720e2dc5",
        "6087e663132d4d12c81fd96b",
        "5beec8ea0db834001a6f9dbf",
        "5649ad3f4bdc2df8348b4585",
        "5649ade84bdc2d1b2b8b4587",
        "59e62cc886f77440d40b52a1",
        "5a0071d486f77404e23a12b2",
        "57e3dba62459770f0c32322b",
        "5cf54404d7f00c108840b2ef",
        "5e2192a498a36665e8337386",
        "5b30ac585acfc433000eb79c",
        "59e6318286f77444dd62c4cc",
        "5cf50850d7f00c056e24104c",
        "5cf508bfd7f00c056e24104e",
        "5947f92f86f77427344a76b1",
        "5947fa2486f77425b47c1a9b",
        "5c6bf4aa2e2216001219b0ae",
        "5649ae4a4bdc2d1b2b8b4588",
        "5998517986f7746017232f7e",
        "623c3be0484b5003161840dc",
        "628c9ab845c59e5b80768a81",
        "628a664bccaab13006640e47"
      ],
      item:null
    },
    {
      slotName:'charge',
      capatibleItems:[
        "6130ca3fd92c473c77020dbd",
        "5648ac824bdc2ded0b8b457d"
      ],
      item:null
    },
    {
      slotName:'magazine',
      capatibleItems:[
        "564ca9df4bdc2d35148b4569",
        "564ca99c4bdc2d16268b4589",
        "55d480c04bdc2d1d4e8b456a",
        "5cbdaf89ae9215000e5b9c94",
        "55d481904bdc2d8c2f8b456a",
        "55d482194bdc2d1d4e8b456b",
        "55d4837c4bdc2d1d4e8b456c",
        "5aaa4194e5b5b055d06310a5",
        "5bed61680db834001d2c45ab",
        "5bed625c0db834001c062946"
      ],
      item:null
    }
  ]
}

const Moding:React.FC=()=>{
  const container:React.CSSProperties={
    display:'flex',
    width:'80%',
    minHeight:'500px',
    flexDirection:'column',
    

  }
  return(
    <div style={container}>
      <MainWeaponSelect></MainWeaponSelect>
      
    </div>
  );
}


export default Moding