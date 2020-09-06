const axios = {
  get: () =>
    new Promise((resolve, reject) => {
      const description =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";
      const descriptionMovie = " Perspiciatis unde omnis";
      setTimeout(() => {
        resolve({
          data: [
            {
              premiereMonth: new Date("2019-12-01"),
              description,
              movies: [
                { date: new Date("2019-12-16"), description: descriptionMovie },
                { date: new Date("2019-12-18"), description: descriptionMovie },
                { date: new Date("2019-12-22"), description: descriptionMovie },
              ],
            },
            {
              premiereMonth: new Date("2019-11-01"),
              description,
              movies: [
                { date: new Date("2019-11-16"), description: descriptionMovie },
                { date: new Date("2019-11-18"), description: descriptionMovie },
                { date: new Date("2019-11-22"), description: descriptionMovie },
              ],
            },
            {
              premiereMonth: new Date("2019-10-01"),
              description,
              movies: [
                { date: new Date("2019-10-16"), description: descriptionMovie },
                { date: new Date("2019-10-18"), description: descriptionMovie },
                { date: new Date("2019-10-22"), description: descriptionMovie },
              ],
            },
          ],
        });
      }, 500);
    }),
};

export const getPremieres = async () => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/premieres`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
