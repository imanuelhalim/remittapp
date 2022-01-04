import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from "react-icons/cg";

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'My Attendance',
    path: '/my-attendance',
    icon: <FaIcons.FaWpforms />,
    cName: 'nav-text',
  },
  {
    title: 'My Profile',
    path: '/my-profile',
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text',
  },
  {
    title: 'Work History',
    path: '/work-history',
    icon: <FaIcons.FaFileInvoiceDollar />,
    cName: 'nav-text',
  }
]