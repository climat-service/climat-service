"use client";
import Checkbox from "@/components/ui/Checkbox";
import SmallArrowLeftIcon from "@/components/ui/icons/SmallArrowLeftIcon";
import { useState } from "react";

interface CheckboxListProps {
  titleTextClass: string;
  list: string[];
  shorten?: boolean;
  titleText: string;
  setSelected: (value: any) => void;
}

const CheckboxList = ({
  titleTextClass,
  list,
  shorten,
  titleText,
  setSelected,
}: CheckboxListProps) => {
  const arrayToUse = [...list];

  const arrayWithItemsAfterShortened = arrayToUse.slice(5);

  const [isShortened, setIsShortened] = useState(false);

  if (shorten) {
    arrayToUse.length = 5;
  }

  if (list.length < 5) {
    shorten = false;
  }

  return (
    <div className="flex items-start justify-center flex-col gap-1">
      <p className={titleTextClass}>{titleText}</p>
      <ul className="flex flex-col items-start justify-center">
        {arrayToUse.map((producer, index) => {
          return (
            <li key={index}>
              <Checkbox
                label={producer}
                onChange={() =>
                  setSelected((prev: any) => new Set([...prev, producer]))
                }
              />
            </li>
          );
        })}
      </ul>
      {shorten && (
        <>
          {isShortened && (
            <ul className="flex flex-col items-start justify-center">
              {arrayWithItemsAfterShortened.map((producer, index) => {
                return (
                  <li key={index}>
                    <Checkbox
                      label={producer}
                      onChange={() =>
                        setSelected((prev: any) => new Set([...prev, producer]))
                      }
                    />
                  </li>
                );
              })}
            </ul>
          )}
          <p
            className="flex items-center justify-center gap-1 text-sm"
            onClick={() => {
              setIsShortened(!isShortened);
            }}
          >
            {isShortened ? (
              <span className="flex items-center justify-center gap-1 text-sm">
                Скрыть <SmallArrowLeftIcon className="rotate-90" />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1 text-sm">
                Показать все <SmallArrowLeftIcon className="-rotate-90" />
              </span>
            )}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckboxList;
