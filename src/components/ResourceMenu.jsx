import { RESOURCE_BY_ID } from '../data/resources.js'

export function ResourceMenu({ resourceIds = [] }) {
  const resources = resourceIds
    .map((resourceId) => RESOURCE_BY_ID[resourceId])
    .filter(Boolean)

  if (resources.length === 0) {
    return null
  }

  return (
    <details className="resource-menu">
      <summary>
        Sources
        <span aria-hidden="true">↗</span>
      </summary>

      <div className="resource-menu__panel">
        <div className="resource-menu__heading">
          Read the original sources
        </div>

        {resources.map((resource) => (
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            key={resource.id}
          >
            <span>
              {resource.authors}
              {resource.year ? ` (${resource.year})` : ''}
            </span>

            <strong aria-hidden="true">↗</strong>
          </a>
        ))}
      </div>
    </details>
  )
}
