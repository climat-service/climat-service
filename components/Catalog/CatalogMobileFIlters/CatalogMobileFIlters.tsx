"use client";
import ContentZone from "@/components/ui/ContentZone";
import Input from "@/components/ui/Input";
import CheckboxList from "./CheckboxList/CheckboxList";
import Button from "@/components/ui/Button";
import ICatalogItem from "@/interfaces/ICatalogItem";
import { useState } from "react";
import routes from "@/utils/routes";
import api from "@/utils/classes/Api";

interface CatalogMobileFIltersProps {
  setFiltersHidden?: (value: boolean) => void;
  catalogItems: { id: number; attributes: ICatalogItem }[];
  setCatalogItems: (value: any) => void;
}

const CatalogMobileFIlters = ({
  setFiltersHidden,
  catalogItems,
  setCatalogItems,
}: CatalogMobileFIltersProps) => {
  const titleTextClass = `text-sm font-semibold mb-1`;

  const uniqueCoveringAreas = Array.from(
    new Set(catalogItems.map((item) => item.attributes.coveringArea.toString()))
  );
  const uniqueProducers = Array.from(
    new Set(catalogItems.map((item) => item.attributes.producer))
  );
  const uniqueTypes = Array.from(
    new Set(catalogItems.map((item) => item.attributes.type))
  );
  const uniquePowers = Array.from(
    new Set(catalogItems.map((item) => item.attributes.power.toString()))
  );
  const uniqueEnergyClasses = Array.from(
    new Set(catalogItems.map((item) => item.attributes.energyClass))
  );
  
  const [selectedProducers, setSelectedProducers] = useState(new Set());
  const [selectedCoveringAreas, setSelectedCoveringAreas] = useState(new Set());
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedPowers, setSelectedPowers] = useState(new Set());
  const [selectedEnergyClasses, setSelectedEnergyClasses] = useState(new Set());
  const [selectedInvertorType, setSelectedInvertorType] = useState("Любой");
  const [minPrice, setMinPrice] = useState(null as any);
  const [maxPrice, setMaxPrice] = useState(null as any);

  const inventorTypes = ["Да", "Нет", "Любой"];

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedProducers.size > 0) {
      params.append(
        "filters[producer][$eq]",
        Array.from(selectedProducers).join(",")
      );
    }

    // Добавьте другие фильтры по аналогии
    if (selectedCoveringAreas.size > 0) {
      params.append(
        "filters[coveringArea][$eq]",
        Array.from(selectedCoveringAreas).join(",")
      );
    }

    if (selectedTypes.size > 0) {
      params.append("filters[type][$eq]", Array.from(selectedTypes).join(","));
    }

    if (selectedPowers.size > 0) {
      params.append(
        "filters[power][$eq]",
        Array.from(selectedPowers).join(",")
      );
    }

    if (selectedEnergyClasses.size > 0) {
      params.append(
        "filters[energyClass][$eq]",
        Array.from(selectedEnergyClasses).join(",")
      );
    }

    if (minPrice !== null) {
      params.append("filters[price][$gte]", minPrice);
    }

    if (maxPrice !== null) {
      params.append("filters[price][$lte]", maxPrice);
    }

    if (selectedInvertorType === "Да") {
      params.append("filters[invertor][$eq]", "true");
    } else if (selectedInvertorType === "Нет") {
      params.append("filters[invertor][$eq]", "false");
    }

    api
      .get(
        `${routes.backend}/api/catalog-items?${params.toString()}&populate=*`
      )
      .then((data) => {
        setCatalogItems(data.data);
      })
      .catch((error) => {
        console.error("Ошибка при фильтрации:", error);
      });
  };

  return (
    <div>
      <ContentZone className="py-3 flex items-center justify-center">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className={titleTextClass}>Цена, ₽</p>
            <div className="flex items-end justify-start gap-3">
              <Input
                placeholder="От"
                type="number"
                className="max-w-[121px]"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <Input
                placeholder="До"
                type="number"
                className="max-w-[121px]"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <CheckboxList
            titleText="Производитель"
            titleTextClass={titleTextClass}
            list={uniqueProducers}
            setSelected={setSelectedProducers}
            shorten
          />
          <CheckboxList
            titleText="Площадь помещения"
            titleTextClass={titleTextClass}
            list={uniqueCoveringAreas}
            setSelected={setSelectedCoveringAreas}
            shorten
          />
          <CheckboxList
            titleText="Тип кондиционера"
            titleTextClass={titleTextClass}
            list={uniqueTypes}
            setSelected={setSelectedTypes}
            shorten
          />
          <CheckboxList
            titleText="Инвенторный"
            titleTextClass={titleTextClass}
            list={inventorTypes}
            setSelected={setSelectedInvertorType}
            shorten
          />
          <CheckboxList
            titleText="Мощность кондиционера (BTU)"
            titleTextClass={titleTextClass}
            list={uniquePowers}
            setSelected={setSelectedPowers}
            shorten
          />
          <CheckboxList
            titleText="Класс энергопотребления"
            titleTextClass={titleTextClass}
            list={uniqueEnergyClasses}
            setSelected={setSelectedEnergyClasses}
            shorten
          />
          <Button
            color="green"
            onClick={(e: any) => {
              e.preventDefault();
              applyFilters();
              if (setFiltersHidden) {
                setFiltersHidden(false);
              }
            }}
            className="max-w-[121px]"
          >
            Применить
          </Button>
        </form>
      </ContentZone>
    </div>
  );
};

export default CatalogMobileFIlters;
