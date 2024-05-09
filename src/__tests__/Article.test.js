test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
