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
  ConProcent,
} from './DictionaryTable.styled';
import sprite from '../../assets/sprite.svg';
import { CircularProgress } from '../Progress';

import Pagination from '../Pagination/Pagination';

import {
  fetchWords,
  fetchWordsRecommend,
  addRecommendWord,
  fetchTasks,
} from '../../redux/words/operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectWords,
  selectTotalPage,
  selectFiltersKeyWord,
  selectFiltersCategory,
  selectWordsRecommend,
  selectIsLoading,
  selectFiltersIsIrregular,
} from '../../redux/words/selectors';
import { useSelector } from 'react-redux';
import { EditWordModal } from '../../components/Modal/EditWordModal';
import { useState } from 'react';
import { Loader } from '../../components/Loader';

export function DictionaryTable({ exam }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleStatusClick = rowData => {
    setSelectedRowData(rowData);
    setIsOpenModal(true);
  };

  const words = useSelector(selectWords);
  const recommend = useSelector(selectWordsRecommend);
  const totalPages = useSelector(selectTotalPage);
  const keyword = useSelector(selectFiltersKeyWord);
  const category = useSelector(selectFiltersCategory);
  const isLoading = useSelector(selectIsLoading);
  const isIrregular = useSelector(selectFiltersIsIrregular);
  const dispatch = useDispatch();

  const handleAddRecommend = id => {
    dispatch(addRecommendWord({ id }));
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    if (exam) {
      dispatch(
        fetchWords({ page: currentPage, keyword, category, isIrregular })
      );
    } else {
      dispatch(
        fetchWordsRecommend({
          page: currentPage,
          keyword,
          category,
          isIrregular,
        })
      );
    }
  }, [dispatch, currentPage, keyword, category, exam, isIrregular]);

  const columnHelper = createColumnHelper();

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
        cell: info => (
          <ConProcent>
            <Procent>{info.getValue()}%</Procent>
            <CircularProgress
              size={26}
              strokeWidth={4}
              progress={info.getValue()}
              color1="#2BD627"
              color2="#D4F8D3"
              color3="#D4F8D3"
            />
          </ConProcent>
        ),
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
          <ButtonAdd
            type="submit"
            onClick={() => handleAddRecommend(info.row.original._id)}
          >
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
