import { Avatar } from '@/components/ui/avatar';
import { FeatureNavItem, NavItem } from '@/components/ui/navigation';
import {
  AwardBasicBoldIcon,
  BellBasicMediumIcon,
  DashboardBasicBoldIcon,
  InfoBasicBoldIcon,
  LanguageBasicMediumIcon,
  ListBasicBoldIcon,
  MupiBasicBoldIcon,
  ScienceBasicBoldIcon,
  StarBasicBoldIcon,
} from '@/icons/bordered';
import { MoogliBusinessLight } from '@/icons/brand';

function Navigation() {
  return (
    <nav className='bg-neutrals-500'>
      <div className='mx-auto max-w-7xl px-2 mobileM:px-6 tablet:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <a className='flex flex-shrink-0 items-center' href='/'>
            <MoogliBusinessLight />
          </a>
          <div className='flex'>
            <NavItem disabled icon={DashboardBasicBoldIcon} title='Dashboard' />
            <NavItem disabled icon={ListBasicBoldIcon} title='Assessments' />
            <NavItem disabled icon={AwardBasicBoldIcon} title='Achievements' />
            <NavItem disabled icon={StarBasicBoldIcon} title='Reviews' />
            <NavItem disabled icon={MupiBasicBoldIcon} title='Mupi' />
            <NavItem disabled icon={ScienceBasicBoldIcon} title='Learn' />
          </div>
          <div className='flex space-x-4'>
            <FeatureNavItem icon={LanguageBasicMediumIcon} />
            <FeatureNavItem icon={BellBasicMediumIcon} notificationBadge />
            <Avatar size={40} src='https://picsum.photos/id/2/400/400' />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavigationBadgeInfo() {
  return (
    <div className='bg-neutrals-0'>
      <div className='mx-auto max-w-7xl p-5'>
        <div className='flex items-center justify-center space-x-2 text-neutrals-400'>
          <InfoBasicBoldIcon fill='currentColor' />
          <p className='text-caption font-medium'>
            To start using the extranet, please verify your account first
          </p>
        </div>
      </div>
    </div>
  );
}

export { Navigation, NavigationBadgeInfo };
