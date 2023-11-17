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
import { ChevronDownIcon } from '@heroicons/react/24/outline';

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
const Range = [0, 1000];
const TabFilters = () => {
  const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false);
  const [rangePrices, setRangePrices] = useState(Range);

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

  // FOR RESPONSIVE MOBILE
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
                    <ButtonSecondary
                      onClick={() => {
                        setRangePrices(Range);
                        closeModalMoreFilter;
                      }}
                    >
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

  // FOR DESKTOP
  const renderTabsPriceRage = () => {
    return (
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button className='flex items-center justify-center px-4 py-2 text-sm text-blue-900 border border-blue-500 rounded-full cursor-pointer bg-blue-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <span className='ml-2'>{`${rangePrices[0]}$ - ${rangePrices[1]}$`}</span>
              {renderXClear()}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 mt-4 bg-white border rounded-2xl'>
                <div className='flex flex-col p-5'>
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
                  <div className='flex justify-between space-x-10 pt-7'>
                    <div className='flex flex-col space-y-1'>
                      <label htmlFor='minPrice'>Min price</label>
                      <div className='flex w-32 border border-gray-300 rounded-full'>
                        <span className='flex items-center pl-4'>$</span>
                        <input
                          type='text'
                          className='overflow-hidden bg-transparent border-none'
                          disabled
                          value={rangePrices[0]}
                          name='minPrice'
                          id='minPrice'
                        />
                      </div>
                    </div>

                    <div className='flex flex-col space-y-1'>
                      <label htmlFor='maxPrice'>Max price</label>
                      <div className='flex w-32 border border-gray-300 rounded-full'>
                        <span className='flex items-center pl-4'>$</span>
                        <input
                          type='text'
                          className='overflow-hidden bg-transparent border-none'
                          disabled
                          value={rangePrices[1]}
                          name='maxPrice'
                          id='maxPrice'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between p-5 rounded-b-2xl bg-gray-50'>
                  <Popover.Button>
                    <ButtonSecondary
                      onClick={() => {
                        setRangePrices(Range);
                        closeModalMoreFilter;
                      }}
                      className='border w-30 border-slate-300'
                    >
                      Clear
                    </ButtonSecondary>
                  </Popover.Button>
                  <Popover.Button>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Apply
                    </ButtonPrimary>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderTabsCategories = () => {
    return (
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button className='flex items-center justify-center px-4 py-2 text-sm border rounded-full cursor-pointer'>
              <svg
                className='w-4 h-4 shrink-0'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 2V5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 2V5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 13H15'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 17H12'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 3.5C19.33 3.68 21 4.95 21 9.65V15.83C21 19.95 20 22.01 15 22.01H9C4 22.01 3 19.95 3 15.83V9.65C3 4.95 4.67 3.69 8 3.5H16Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='ml-2'>Categories</span>
              <ChevronDownIcon className='flex items-center justify-center flex-shrink-0 w-4 h-4 ml-3 cursor-pointer' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 mt-4 bg-white border rounded-2xl'>
                <div className='flex flex-col p-5'>
                  <Checkbox
                    name='All Categories'
                    label='All Categories'
                    defaultChecked={false}
                    className='pb-3 pr-40 border-b'
                    labelClassName='whitespace-nowrap'
                  />
                  {Data['Categories'].map((v, i) => (
                    <div key={v} className='my-3'>
                      <Checkbox
                        name={v}
                        label={v}
                        defaultChecked={false}
                        labelClassName='whitespace-nowrap'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-between p-5 rounded-b-2xl bg-gray-50'>
                  <Popover.Button>
                    <ButtonSecondary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Clear
                    </ButtonSecondary>
                  </Popover.Button>
                  <Popover.Button>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Apply
                    </ButtonPrimary>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderTabsColor = () => {
    return (
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button className='flex items-center justify-center px-4 py-2 text-sm border rounded-full cursor-pointer'>
              <svg
                className='w-4 h-4 shrink-0'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.35 1.94995L9.69 3.28992'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.07 11.92L17.19 11.26'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 22H16'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='ml-2'>Colors</span>
              <ChevronDownIcon className='flex items-center justify-center flex-shrink-0 w-4 h-4 ml-3 cursor-pointer' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 mt-4 bg-white border rounded-2xl'>
                <div className='flex flex-col p-5 pr-40'>
                  {Data['Colors'].map((v, i) => (
                    <div key={v} className='my-3'>
                      <Checkbox
                        name={v}
                        label={v}
                        defaultChecked={false}
                        labelClassName='whitespace-nowrap'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-between p-5 rounded-b-2xl bg-gray-50'>
                  <Popover.Button>
                    <ButtonSecondary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Clear
                    </ButtonSecondary>
                  </Popover.Button>
                  <Popover.Button>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Apply
                    </ButtonPrimary>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderTabsSize = () => {
    return (
      <Popover className='relative'>
        {() => (
          <>
            <Popover.Button className='flex items-center justify-center px-4 py-2 text-sm border rounded-full cursor-pointer'>
              <svg
                className='w-4 h-4 shrink-0'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 9V3H15'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 15V21H9'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21 3L13.5 10.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.5 13.5L3 21'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='ml-2'>Size</span>
              <ChevronDownIcon className='flex items-center justify-center flex-shrink-0 w-4 h-4 ml-3 cursor-pointer' />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 mt-4 bg-white border rounded-2xl'>
                <div className='flex flex-col p-5 pr-40'>
                  {Data['Size'].map((v, i) => (
                    <div key={v} className='my-3'>
                      <Checkbox
                        name={v}
                        label={v}
                        defaultChecked={false}
                        labelClassName='whitespace-nowrap'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-between p-5 rounded-b-2xl bg-gray-50'>
                  <Popover.Button>
                    <ButtonSecondary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Clear
                    </ButtonSecondary>
                  </Popover.Button>
                  <Popover.Button>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Apply
                    </ButtonPrimary>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };
  const renderTabIsOnsale = () => {
    return (
      <Popover className='relative'>
        {() => (
          <>
            <div className='inline-flex items-center justify-center w-auto px-4 py-2 text-sm text-blue-900 border border-blue-500 rounded-full cursor-pointer bg-blue-50'>
              <svg
                className='w-4 h-4'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M9 15L15 9'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.4945 14.5H14.5035'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M9.49451 9.5H9.50349'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='ml-2'>On Sale</span>
              {renderXClear()}
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute left-0 mt-4 bg-white border rounded-2xl'>
                <div className='flex flex-col p-5 pr-40'>
                  {Data['Size'].map((v, i) => (
                    <div key={v} className='my-3'>
                      <Checkbox
                        name={v}
                        label={v}
                        defaultChecked={false}
                        labelClassName='whitespace-nowrap'
                      />
                    </div>
                  ))}
                </div>

                <div className='flex justify-between p-5 rounded-b-2xl bg-gray-50'>
                  <Popover.Button>
                    <ButtonSecondary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Clear
                    </ButtonSecondary>
                  </Popover.Button>
                  <Popover.Button>
                    <ButtonPrimary
                      onClick={closeModalMoreFilter}
                      className='border w-30 border-slate-300'
                    >
                      Apply
                    </ButtonPrimary>
                  </Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  return (
    <div>
      {/* FOR DESKTOP */}
      <div className='flex-1 hidden space-x-4 lg:flex'>
        {renderTabsPriceRage()}
        {renderTabsCategories()}
        {renderTabsColor()}
        {renderTabsSize()}
        {renderTabIsOnsale()}
      </div>
      {/* FOR RESPONSIVE MOBILE */}
      <div className='lg:hidden'>{renderTabMobileFilter()}</div>
    </div>
  );
};

export default TabFilters;
