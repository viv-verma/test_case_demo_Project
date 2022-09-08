import { screen, render } from "@testing-library/react";
import Async from "./Async";

// test('render aync list items component', async () => {
//     render(<Async />);

//     const listItemElement = await screen.findAllByRole('listitem');
//     expect(listItemElement).not.toHaveLength(0);
// })


// test('render aync list items component', async () => {
//     window.fetch = jest.fn();
//     window.fetch.mockResolvedValue({
//         json: async () => [{id: 1, title: 'my post'}]
//     })
//     render(<Async />);

//     const listItemElement = await screen.findAllByRole('listitem');
//     expect(listItemElement).not.toHaveLength(0);
// })




describe('Category Api', () => {
  test('category api data status', async () => {

    const makeRequest = () => 
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            return data;
        });
    
    const data = await makeRequest();
    expect(data && typeof data === 'object').toBe(true);
    // expect(data && typeof data.id ).toBe('number');
    // expect(data &&   typeof data.title === 'string').toBe(true); 
  })
})