const Accordion = ({ name }: { name: string }) => {
  return (
    <aside className='accordion'>
      <details name={name}>
        <summary>Author Guidelines</summary>
        <p>
          Manuscripts submitted for consideration should present original
          research, critical analysis, or interdisciplinary scholarship relevant
          to the journal&apos;s scope. Submissions must not exceed 7,000 words
          including references, notes, and appendices.
        </p>

        <p>
          Authors are encouraged to include a concise abstract of no more than
          150 words, followed by 4–6 keywords. Citations should conform to the
          latest edition of the Chicago Manual of Style. All submissions must be
          anonymized for peer review.
        </p>

        <p>
          Papers should be submitted electronically in Microsoft Word format.
          Questions regarding manuscript preparation may be directed to{' '}
          <a href='#'>Journals Support</a>.
        </p>
      </details>

      <details name={name}>
        <summary>Editorial Board</summary>
        <p>
          The editorial board is composed of scholars and practitioners from a
          broad range of disciplines, institutions, and international research
          communities.
        </p>

        <p>
          Board members oversee peer review, contribute to strategic direction,
          and advise on emerging areas of scholarship relevant to the
          journal&apos;s mission.
        </p>

        <p>
          A complete listing of editorial staff and advisory committee members
          is updated annually and published in the journal&apos;s spring issue.
        </p>
      </details>

      <details name={name}>
        <summary>Book Review Policies</summary>
        <p>
          The journal welcomes reviews of recently published academic books that
          contribute substantially to debates within the humanities and social
          sciences.
        </p>

        <p>
          Prospective reviewers should contact the book review editor before
          submitting a review essay. Unsolicited reviews may not be considered.
        </p>

        <p>
          Standard reviews should range between 1,000 and 1,500 words and should
          critically engage the text&apos;s methodology, contribution, and
          scholarly significance.
        </p>
      </details>

      <details name={name}>
        <summary>Abstracting &amp; Indexing</summary>
        <p>
          The journal is indexed in several major academic databases, ensuring
          broad discoverability and accessibility for researchers, librarians,
          and institutions worldwide.
        </p>

        <p>
          Articles are currently abstracted in Humanities International
          Complete, JSTOR, Scopus, and other discipline-specific indexing
          services.
        </p>

        <p>
          Metadata updates and DOI registrations are processed upon publication
          to support citation tracking and long-term archival preservation.
        </p>
      </details>

      <details name={name}>
        <summary>Subscription &amp; Access</summary>
        <p>
          Individual and institutional subscriptions include online access to
          current and archived issues through the journal&apos;s digital
          platform.
        </p>

        <p>
          Discounted subscription rates are available for students, independent
          researchers, and nonprofit organizations. Institutional licenses may
          include campus-wide authentication and archival access.
        </p>

        <p>
          For assistance with account access, renewals, or print delivery,
          please <a href='#'>Email Journals</a>.
        </p>
      </details>
    </aside>
  )
}

export default Accordion
