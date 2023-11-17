'use client';

import { useState, Fragment } from 'react';
import { Dialog, Popover, Transition, Switch } from '@/app/headlessui';
import ButtonClose from '@/shared/ButtonClose/ButtonClose';
import Checkbox from '@/shared/Checkbox/Checkbox';
import Radio from '@/shared/Radio/Radio';
import Slider from 'rc-slider';
import MySwitch from './MySwitch';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const Data = {
  Categories: [
    'New Arrivals',
    'Sale',
    'Backpacks',
    'Travel Bags',
    'Laptop Sleeves',
    'Organization',
    'Accessories',
  ],
  Colors: ['White', 'Beige', 'Blue', 'Black', 'Brown', 'Green', 'Navy'],
  Size: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL'],
  SortOrder: [
    'Most Popular',
    'Best Rating',
    'Newest',
    'Price Low - Hight',
    'Price Hight - Low',
  ],
};
const TabFilters = () => {
  const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);
  const [rangePrices, setRangePrices] = useState([0, 1000]);

  const closeModalMoreFilter = () => setisOpenMoreFilter(false);
  const openModalMoreFilter = () => setisOpenMoreFilter(true);

  const renderXClear = () => {
    return (
      <span className='flex items-center justify-center flex-shrink-0 w-4 h-4 ml-3 text-white bg-blue-500 rounded-full cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-3 h-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    );
  };

  const renderTabMobileFilter = () => {
    return (
      <div>
        <div
          className='inline-flex items-center justify-center w-auto px-4 py-2 text-sm text-blue-900 border border-blue-500 rounded-full cursor-pointer bg-blue-50'
          onClick={openModalMoreFilter}
        >
          <svg
            className='w-4 h-4'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22 6.5H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6 6.5H2'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M22 17.5H18'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M8 17.5H2'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='ml-2'>Products filters (3)</span>
          {renderXClear()}
        </div>

        <Transition appear show={isOpenMoreFilter} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto'
            onClose={closeModalMoreFilter}
          >
            <div className='h-screen'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black bg-opacity-40'></div>
              </Transition.Child>

              <Transition.Child
                className='flex flex-col max-w-4xl bg-white'
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel>
                  <div className='sticky top-0 flex items-center justify-center px-6 bg-white border-b'>
                    <Dialog.Title
                      as='h3'
                      className='px-6 py-4 text-lg font-medium leading-6 text-gray-900'
                    >
                      Products filter
                    </Dialog.Title>
                    <div className='absolute left-6 top-3'>
                      <ButtonClose onClick={closeModalMoreFilter} />
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      Categories
                    </h3>
                    <div className='flex flex-wrap border-b pb-7'>
                      {Data['Categories'].map((v, i) => (
                        <div key={v} className='w-1/2 my-3'>
                          <Checkbox name={v} label={v} defaultChecked={false} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      Colors
                    </h3>
                    <div className='flex flex-wrap border-b pb-7'>
                      {Data['Colors'].map((v, i) => (
                        <div key={v} className='w-1/2 my-3'>
                          <Checkbox name={v} label={v} defaultChecked={false} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      Size
                    </h3>
                    <div className='flex flex-wrap border-b pb-7'>
                      {Data['Size'].map((v, i) => (
                        <div key={v} className='w-1/2 my-3'>
                          <Checkbox name={v} label={v} defaultChecked={false} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      Range Prices
                    </h3>
                    <Slider
                      range
                      min={0}
                      max={1000}
                      step={1}
                      defaultValue={[rangePrices[0], rangePrices[1]]}
                      allowCross={false}
                      onChange={(v: number | number[]) => {
                        if (Array.isArray(v)) {
                          setRangePrices(v);
                        }
                      }}
                    />
                    <div className='flex justify-between border-b py-7'>
                      <div className='flex flex-col space-y-1'>
                        <label htmlFor='minPrice'>Min price</label>
                        <div className='border border-gray-300 rounded-full'>
                          <span className='pl-4'>$</span>
                          <input
                            type='text'
                            className='bg-transparent border-none'
                            disabled
                            value={rangePrices[0]}
                            name='minPrice'
                            id='minPrice'
                          />
                        </div>
                      </div>

                      <div className='flex flex-col space-y-1'>
                        <label htmlFor='maxPrice'>Max price</label>
                        <div className='w-full border border-gray-300 rounded-full'>
                          <span className='pl-4'>$</span>
                          <input
                            type='text'
                            className='bg-transparent border-none'
                            disabled
                            value={rangePrices[1]}
                            name='maxPrice'
                            id='maxPrice'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      Sort Order
                    </h3>
                    <div className='flex flex-wrap border-b pb-7'>
                      {Data['SortOrder'].map((v, i) => (
                        <div key={v} className='w-full my-3'>
                          <Radio name={v} label={v} defaultChecked={false} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='flex flex-col px-14 my-3.5'>
                    <h3 className='mb-4 text-xl font-medium text-start'>
                      On Sale!
                    </h3>
                    <div className='flex justify-between pb-4'>
                      <div>
                        <h5 className='font-bold'>On sale!</h5>
                        <p className='text-gray-500'>
                          Products currently on sale
                        </p>
                      </div>
                      <div>
                        <MySwitch />
                      </div>
                    </div>
                  </div>
                  <div className='sticky bottom-0 flex justify-between py-6 bg-white px-11'>
                    <ButtonSecondary onClick={closeModalMoreFilter}>
                      Clear
                    </ButtonSecondary>
                    <ButtonPrimary onClick={closeModalMoreFilter}>
                      Apply
                    </ButtonPrimary>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  };

  return <div className='lg:hidden'>{renderTabMobileFilter()}</div>;
};

export default TabFilters;
