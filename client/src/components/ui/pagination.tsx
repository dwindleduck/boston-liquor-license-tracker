import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function PaginationArrow({ isDisabled, onClick, children, ...props }: { isDisabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      disabled={isDisabled}
      className={`flex justify-center items-center h-[32px] w-[32px] border-[2px] border-[var(--button-color-hovered-light)] rounded-[4px] bg-[var(--background-light)] cursor-pointer disabled:cursor-not-allowed ${!isDisabled ? "hover:bg-[var(--button-color-hovered-light)]" : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='flex justify-center items-center gap-[4px]'>
      <PaginationArrow
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeftIcon sx={{
          fill: currentPage === 1 ? "var(--button-color-hovered-light)" : "var(--button-color-active-dark)"
        }} />
      </PaginationArrow>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`border border-[2px] h-[32px] w-[32px] cursor-pointer rounded-[4px] ${currentPage === page ? "border-[1px] border-[var(--background-dark)] bg-[var(--button-color-active-dark)] text-[var(--font-color-light)]" : "border-[var(--button-color-hovered-light)] hover:bg-[var(--button-color-hovered-light)]"}`}
        >
          {page}
        </button>
      ))}
      <PaginationArrow
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRightIcon sx={{
          fill: currentPage === totalPages ? "var(--button-color-hovered-light)" : "var(--button-color-active-dark)"
        }} />
      </PaginationArrow>
    </div>
  )
}

export default Pagination