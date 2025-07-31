const DangerBadge = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <BadgesItem roundedMd>Danger</BadgesItem>
      <BadgesItem outline roundedMd>
        Danger
      </BadgesItem>
      <BadgesItem roundedFull>Danger</BadgesItem>
      <BadgesItem outline roundedFull>
        Danger
      </BadgesItem>
      <BadgesItem roundedFull bgOpacity>
        Danger
      </BadgesItem>
      <BadgesItem bgOpacity>
        Danger
      </BadgesItem>
    </div>
  )
}

export default DangerBadge

