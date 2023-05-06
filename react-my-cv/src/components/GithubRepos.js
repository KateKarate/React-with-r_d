import React from 'react';

const GithubRepos = () => {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch('https://api.github.com/users/KateKarate/repos');
      const data = await response.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <section className="repositories">
      <h2 className="main-heading">Github Repositories</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a className='repo-link' href={repo.html_url} target="_blank" rel="noreferrer">View on Github</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GithubRepos;
