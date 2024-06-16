// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from '@tanstack/react-table';
// import * as React from 'react';
// import { Wrapper, Th, Tr, Td, Button, Table, Svg, Span, Hidden } from './DictionaryTable.styled';
// import sprite from '../../assets/sprite.svg'

// import Pagination from '../Pagination/Pagination';

// import { fetchWords } from '../../redux/words/operation';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { selectWords, selectCurrentPage, selectTotalPage, selectFiltersKeyWord, selectFiltersCategory } from '../../redux/words/selectors';
// import { useSelector } from 'react-redux';
// import { selectToken } from '../../redux/auth/selectors';
// import { EditWordModal } from '../../components/Modal/EditWordModal';
// import { useState } from 'react';

// export function DictionaryTable({exam}) {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   const [selectedRowData, setSelectedRowData] = useState(null);

//   const handleStatusClick = (rowData) => {
//     setSelectedRowData(rowData);
//     setIsOpenModal(true);
//   };

//   const words = useSelector(selectWords);
//   const token = useSelector(selectToken);
//   const totalPages = useSelector(selectTotalPage);
//   const currentPage = useSelector(selectCurrentPage);
//   const keyword = useSelector(selectFiltersKeyWord);
//   const category = useSelector(selectFiltersCategory);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchWords({ token, page: currentPage, keyword, category }));
//   }, [dispatch, token, currentPage, keyword, category]);

//   const columnHelper = createColumnHelper();

//   // const columns = [
//   //   columnHelper.accessor('en', {
//   //     cell: info => info.getValue(),
//   //     header: () => <Span>Word<Svg><use xlinkHref={sprite + '#icon-uk'}></use></Svg></Span>,
//   //   }),
//   //   columnHelper.accessor('ua', {
//   //     cell: info => info.getValue(),
//   //     header: () => <Span>Translation<Svg><use xlinkHref={sprite + '#icon-ukraine'}></use></Svg></Span>,
//   //   }),
//   //   columnHelper.accessor('category', {
//   //     header: () => 'Category',
//   //     cell: info => info.getValue(),
//   //   }),
//   //   columnHelper.accessor('progress', {
//   //     header: () => <span>Progress</span>,
//   //   }),
//   //   columnHelper.accessor('status', {
//   //     header: () => <Hidden>Status</Hidden>,
//   //     cell: info => (
//   //       <Button onClick={() => handleStatusClick(info.row.original)}>
//   //         {info.getValue() || '...'}
//   //       </Button>
//   //     ),
//   //   }),
//   // ];
// let columns;
// if(exam === true) {
//    columns = [
//     columnHelper.accessor('en', {
//       cell: info => info.getValue(),
//       header: () => <Span>Word<Svg><use xlinkHref={sprite + '#icon-uk'}></use></Svg></Span>,
//     }),
//     columnHelper.accessor('ua', {
//       cell: info => info.getValue(),
//       header: () => <Span>Translation<Svg><use xlinkHref={sprite + '#icon-ukraine'}></use></Svg></Span>,
//     }),
//     columnHelper.accessor('category', {
//       header: () => 'Category',
//       cell: info => info.getValue(),
//     }),
//     columnHelper.accessor('progress', {
//       header: () => <span>Progress</span>,
//     }),
//     columnHelper.accessor('status', {
//       header: () => <Hidden>Status</Hidden>,
//       cell: info => (
//         <Button onClick={() => handleStatusClick(info.row.original)}>
//           {info.getValue() || '...'}
//         </Button>
//       ),
//     }),];}
//     else{ columns = [
//       columnHelper.accessor('en', {
//         cell: info => info.getValue(),
//         header: () => <Span>Word<Svg><use xlinkHref={sprite + '#icon-uk'}></use></Svg></Span>,
//       }),
//       columnHelper.accessor('ua', {
//         cell: info => info.getValue(),
//         header: () => <Span>Translation<Svg><use xlinkHref={sprite + '#icon-ukraine'}></use></Svg></Span>,
//       }),
//       columnHelper.accessor('category', {
//         header: () => 'Category',
//         cell: info => info.getValue(),
//       }),

//       columnHelper.accessor('status', {
//         header: () => <Hidden>Status</Hidden>,
//         cell: info => (
//           <Button onClick={() => handleStatusClick(info.row.original)}>
//             {info.getValue() || 'Add to dictionary'}
//           </Button>
//         ),
//       }),]}

//   const table = useReactTable({
//     data: words,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   const handlePageChange = (newPage) => {
//     dispatch(fetchWords({ token, page: newPage }));
//   };

//   return (
//     <>
//     <Wrapper>
//       <Table>
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map(header => (
//                 <Th key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </Th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map(row => (
//             <Tr key={row.id}>
//               {row.getVisibleCells().map(cell => (
//                 <Td key={cell.id}>
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </tbody>
//       </Table>
//       <EditWordModal
//      isOpenModal={isOpenModal}
//      setIsOpenModal={setIsOpenModal}
//      wordData={selectedRowData}
//    />
//     </Wrapper>

//    <Pagination totalPages={totalPages}
//         page={currentPage}
//         onPageChange={handlePageChange}/>
//         </>

//   );
// }

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import {
  Wrapper,
  Th,
  Tr,
  Td,
  Button,
  Table,
  Svg,
  Span,
  Hidden,
  SvgAdd,
  SpanAdd,
  ButtonAdd,
  SpanAddWord,
  Procent,
  ConProcent
} from './DictionaryTable.styled';
import sprite from '../../assets/sprite.svg';
import {CircularProgress} from '../Progress';

import Pagination from '../Pagination/Pagination';

import {
  fetchWords,
  fetchWordsRecommend,
  addRecommendWord,
  fetchTasks
} from '../../redux/words/operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectWords,
  selectCurrentPage,
  selectTotalPage,
  selectFiltersKeyWord,
  selectFiltersCategory,
  selectWordsRecommend,
  selectIsLoading,
} from '../../redux/words/selectors';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectors';
import { EditWordModal } from '../../components/Modal/EditWordModal';
import { useState } from 'react';
import { Loader } from '../../components/Loader';

export function DictionaryTable({ exam }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleStatusClick = rowData => {
    setSelectedRowData(rowData);
    setIsOpenModal(true);
  };

  const words = useSelector(selectWords);
  const recommend = useSelector(selectWordsRecommend);
  const token = useSelector(selectToken);
  const totalPages = useSelector(selectTotalPage);
  const currentPage = useSelector(selectCurrentPage);
  const keyword = useSelector(selectFiltersKeyWord);
  const category = useSelector(selectFiltersCategory);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleAddRecommend = id => {
    dispatch(addRecommendWord({ id, token }));
  };

  // useEffect(() => {
  //   dispatch(fetchWords({ token, page: currentPage, keyword, category }));
  // }, [dispatch, token, currentPage, keyword, category]);

  // useEffect(() => {
  //   dispatch(fetchWordsRecommend({ token, page: currentPage, keyword, category }));
  // }, [dispatch, token, currentPage, keyword, category]);

  useEffect(() => {
    dispatch(fetchTasks({ token }));
  }, [dispatch, token]);

  useEffect(() => {
    if (exam) {
      dispatch(fetchWords({ token, page: currentPage, keyword, category }));
    } else {
      dispatch(
        fetchWordsRecommend({ token, page: currentPage, keyword, category })
      );
    }
  }, [dispatch, token, currentPage, keyword, category, exam]);

  const columnHelper = createColumnHelper();

  // const columns = [
  //   columnHelper.accessor('en', {
  //     cell: info => info.getValue(),
  //     header: () => <Span>Word<Svg><use xlinkHref={sprite + '#icon-uk'}></use></Svg></Span>,
  //   }),
  //   columnHelper.accessor('ua', {
  //     cell: info => info.getValue(),
  //     header: () => <Span>Translation<Svg><use xlinkHref={sprite + '#icon-ukraine'}></use></Svg></Span>,
  //   }),
  //   columnHelper.accessor('category', {
  //     header: () => 'Category',
  //     cell: info => info.getValue(),
  //   }),
  //   columnHelper.accessor('progress', {
  //     header: () => <span>Progress</span>,
  //   }),
  //   columnHelper.accessor('status', {
  //     header: () => <Hidden>Status</Hidden>,
  //     cell: info => (
  //       <Button onClick={() => handleStatusClick(info.row.original)}>
  //         {info.getValue() || '...'}
  //       </Button>
  //     ),
  //   }),
  // ];
  let columns;
  if (exam === true) {
    columns = [
      columnHelper.accessor('en', {
        cell: info => info.getValue(),
        header: () => (
          <Span>
            Word
            <Svg>
              <use xlinkHref={sprite + '#icon-uk'}></use>
            </Svg>
          </Span>
        ),
      }),
      columnHelper.accessor('ua', {
        cell: info => info.getValue(),
        header: () => (
          <Span>
            Translation
            <Svg>
              <use xlinkHref={sprite + '#icon-ukraine'}></use>
            </Svg>
          </Span>
        ),
      }),
      columnHelper.accessor('category', {
        header: () => <span className="category-exam">Category</span>,
        cell: info => <span className="category-exam">{info.getValue()}</span>,
      }),
      columnHelper.accessor('progress', {
        header: () => <span>Progress</span>,
        // cell: info => <CircularProgress progress={info.getValue()} />,
        cell: info =>  <ConProcent><Procent>{info.getValue()}%</Procent><CircularProgress
        size={26}
        strokeWidth={4}
        progress={info.getValue()}
        color1="#2BD627"
        color2="#D4F8D3"
        color3="#D4F8D3"
      /></ConProcent>
      }),
      columnHelper.accessor('status', {
        header: () => <Hidden>Status</Hidden>,
        cell: info => (
          <Button onClick={() => handleStatusClick(info.row.original)}>
            {info.getValue() || '...'}
          </Button>
        ),
      }),
    ];
  } else {
    columns = [
      columnHelper.accessor('en', {
        cell: info => info.getValue(),
        header: () => (
          <Span>
            Word
            <Svg>
              <use xlinkHref={sprite + '#icon-uk'}></use>
            </Svg>
          </Span>
        ),
      }),
      columnHelper.accessor('ua', {
        cell: info => info.getValue(),
        header: () => (
          <Span>
            Translation
            <Svg>
              <use xlinkHref={sprite + '#icon-ukraine'}></use>
            </Svg>
          </Span>
        ),
      }),
      columnHelper.accessor('category', {
        header: () => 'Category',
        cell: info => <span>{info.getValue()}</span>,
      }),

      columnHelper.accessor('status', {
        header: () => <Hidden>Status</Hidden>,
        cell: info => (
          <ButtonAdd type="submit" onClick={() => handleAddRecommend(info.row.original._id)}>
            {info.getValue() || (
              <SpanAdd>
                <SpanAddWord> Add to dictionary</SpanAddWord>
                <SvgAdd>
                  <use xlinkHref={sprite + '#icon-switch'}></use>
                </SvgAdd>
              </SpanAdd>
            )}
          </ButtonAdd>
        ),
      }),
    ];
  }

  let value;
  if (exam) {
    value = words;
  } else {
    value = recommend;
  }

  const table = useReactTable({
    data: value,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePageChange = newPage => {
    if (exam) {
      dispatch(fetchWords({ token, page: newPage }));
    } else {
      dispatch(fetchWordsRecommend({ token, page: newPage }));
    }
  };

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <Table>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    // <Td key={cell.id}>
                    //   {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    // </Td>
                    <Td
                      key={cell.id}
                      className={
                        exam && cell.column.id === 'category'
                          ? 'category-exam'
                          : ''
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </tbody>
          </Table>
        )}
        <EditWordModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          wordData={selectedRowData}
        />
      </Wrapper>

      <Pagination
        totalPages={totalPages}
        page={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
