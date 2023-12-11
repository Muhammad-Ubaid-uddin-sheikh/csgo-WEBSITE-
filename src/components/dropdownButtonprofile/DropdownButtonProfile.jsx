
import { MdArrowDropDown } from 'react-icons/md';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Badge} from 'antd';
import './DrawerProfit.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {HiShare , HiOutlineScale} from 'react-icons/hi'
import {BiSolidLockOpen} from 'react-icons/bi'
import {AiOutlineHistory} from 'react-icons/ai' 
import {GoSignOut} from 'react-icons/go'
const items = [
  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <BsFillPersonFill id='icon-id-fonts'/>  Profile</div>
     
      </Link>
    ),
    key: '0',
  },
  
  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <HiShare id='icon-id-fonts'/> Affiliates</div>
     
      </Link>
    ),
    key: '1',
  },

  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <BiSolidLockOpen id='icon-id-fonts'/>  Game Responsibly</div>
     
      </Link>
    ),
    key: '2',
  },


  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <HiOutlineScale id='icon-id-fonts'/>  Fairness</div>
     
      </Link>
    ),
    key: '3',
  },



  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <AiOutlineHistory id='icon-id-fonts'/>  Game History</div>
     
      </Link>
    ),
    key: '4',
  },




  {
    label: (
        <Link to='/profile' style={{textDecoration:'none'}}>
       <div className='dropdownHeaderEditsProfile'> <GoSignOut id='icon-id-fonts'/>  Sign Out</div>
     
      </Link>
    ),
    key: '5',
  },

//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//         2nd menu item
//       </a>
//     ),
//     key: '1',
//   },
//   {
//     type: 'divider',
//   },

];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Space size={24}>
    
    <Badge>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
  </Space> <p className="porofilePage">Anonymous293543</p> 
        <MdArrowDropDown style={{fontSize:'21px',color:'#848B8D'}} />
      </Space>
    </a>
  </Dropdown>
);
export default App;