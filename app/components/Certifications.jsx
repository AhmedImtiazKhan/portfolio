import { certifications } from '@/app/data/certifications';

const Certifications = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          {cert.image && (
            <div className="mb-4">
              <img src={cert.image} alt={`${cert.title} logo`} className="h-12 w-auto" />
            </div>
          )}

          <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">Issued by {cert.issuer}</p>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Issued: {cert.issueDate}</p>
            <p>Expires: {cert.expiryDate}</p>
          </div>

          {cert.description && (
            <p className="mt-3 text-gray-600 dark:text-gray-300">{cert.description}</p>
          )}

          {cert.credentialURL && (
            <a
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Verify Credential
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Certifications;
