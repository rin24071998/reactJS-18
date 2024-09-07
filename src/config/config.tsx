import Paragraph from '@components/Paragraph/Paragraph';
import { keyLanguage } from '@constants/constants';
import { LogoutOutlined } from '@icons/icons';
import type { MenuProps } from 'antd';
import { TFunction } from 'i18next';
import React from 'react';
/**
 * Generates a list of language menu items with localized labels.
 *
 * @param t - A translation function provided by i18next or a similar library.
 * @returns An array of menu items, each with a localized label and a unique key.
 */
export const getItemsLanguage = (t: TFunction): MenuProps['items'] => {
  // Define an array of menu items
  const items: MenuProps['items'] = [
    {
      label: t('language.english'),
      key: keyLanguage.EN,
    },
    {
      label: t('language.japanese'),
      key: keyLanguage.JP,
    },
  ];
  return items;
};

export const getItemsMenuUser = (
  userName: string,
  t: TFunction,
  isMobile: boolean
): MenuProps['items'] => {
  // Define an array of menu items
  const items: MenuProps['items'] = [
    {
      key: '2',
      label: (
        <>
          <LogoutOutlined /> {t('logout')}
        </>
      ),
    },
  ];
  if (isMobile) {
    items.unshift({
      key: '1',
      label: <Paragraph text={userName} className='txt-bold' />,
    });
  }
  return items;
};
