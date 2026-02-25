export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=${process.env.ADZUNA_ID}&app_key=${process.env.ADZUNA_KEY}&results_per_page=20&what=security&max_days_old=30&content-type=application/json`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}