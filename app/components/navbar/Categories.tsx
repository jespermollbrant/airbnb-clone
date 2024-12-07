"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiCityCar,
  GiModernCity,
  GiShinyEntrance,
  GiBirdHouse,
  GiBookshelf,
  GiFactory
} from "react-icons/gi";
import { FaSkiing, FaUniversity, FaBuilding } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

import styles from "./Categories.module.css";

export const categories = [
  {
    label: "Chalmers",
    icon: GiFactory,
    description: "Properties near Chalmers University of Technology, Sweden",
  },
  {
    label: "ETH Zürich",
    icon: MdOutlineVilla,
    description: "Properties near ETH Zürich, Switzerland",
  },
  {
    label: "TU Delft",
    icon: GiWindmill,
    description: "Properties near Technical University of Delft, Netherlands",
  },
  {
    label: "KU Leuven",
    icon: TbMountain,
    description: "Properties near KU Leuven, Belgium",
  },
  {
    label: "Trinity College",
    icon: GiCastle,
    description: "Properties near Trinity College Dublin, Ireland",
  },
  {
    label: "TU Berlin",
    icon: GiCityCar,
    description: "Properties near Technical University of Berlin, Germany",
  },
  {
    label: "Politecnico Milano",
    icon: GiModernCity,
    description: "Properties near Politecnico di Milano, Italy",
  },
  {
    label: "RWTH Aachen",
    icon: FaBuilding,
    description: "Properties near RWTH Aachen University, Germany",
  },
  {
    label: "Mines ParisTech",
    icon: GiShinyEntrance,
    description: "Properties near École des Mines de Paris, France",
  },
  {
    label: "TU Eindhoven",
    icon: GiBirdHouse,
    description: "Properties near Eindhoven University of Technology, Netherlands",
  },
  {
    label: "Groningen",
    icon: GiBookshelf,
    description: "Properties near University of Groningen, Netherlands",
  },
  {
    label: "Politecnico Torino",
    icon: FaBuilding,
    description: "Properties near Politecnico di Torino, Italy",
  }
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className={`
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        overflow-
        ${styles.categories}
        `}
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={item.label === category}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
