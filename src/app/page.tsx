type PageProps = {
  searchParams: {
    userType: string;
    page: number;
  };
};

export default function Page({ searchParams: { userType, page } }: PageProps) {
  return (
    <div>
      <div>Page</div>
      {userType && <div>User Type: {userType}</div>}
      <div>Page: {page}</div>
    </div>
  );
}
