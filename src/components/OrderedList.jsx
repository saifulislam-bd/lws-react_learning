const OrderedList = () => {
  return (
    <div className="w-full">
      <ol className="space-y-5">
        <ListItem count={1} text="It is a long established fact reader" />
        <ListItem count={2} text="It is a long established fact reader" />
        <ListItem count={3} text="The point of using Lorem Ipsum" />
        <ListItem count={4} text="There are many variations of passages" />
        <ListItem count={5} text="If you are going to use a of Lorem" />
      </ol>
    </div>
  );
};

export default OrderedList;

