import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdIcons.MdSpaceDashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Staff",
        path: "/staff/newstaff",
        icon: <IoIcons.IoMdPeople />,
      },
      {
        title: "Student",
        path: "/admin/newstudent",
        icon: <IoIcons.IoIosPeople />,
      },
    ],
  },

  {
    title: "Faculty",
    path: "/staff/newfaculty",
    icon: <FaIcons.FaCity />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Course",
        path: "/student/addcourse",
        icon: <ImIcons.ImBook />,
      },
      {
        title: "Department",
        path: "/staff/newdepartment",
        icon: <BsIcons.BsBuilding />,
      },
      {
        title: "Specialization",
        path: "/staff/specialization",
        icon: <GiIcons.GiTabletopPlayers />,
      },
    ],
  },
  {
    title: "Course",
    path: "/staff/registercourses",
    icon: <GiIcons.GiArchiveRegister />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Course",
        path: "/student/addcourse",
        icon: <ImIcons.ImBook />,
      },
    ],
  },

  {
    title: "Notice Board",
    path: "/staff/noticeboard",
    icon: <FaIcons.FaAssistiveListeningSystems />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Information",
        path: "/staff/information",
        icon: <RiIcons.RiFolderInfoLine />,
      },
    ],
  },

  {
    title: "Bio-Metrics",
    path: "/user/formdata",
    icon: <BiIcons.BiOutline />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "LogOut",
    path: "/",
    icon: <MdIcons.MdOutlineLogout />,
  },
];
