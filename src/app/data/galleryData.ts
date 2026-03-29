export interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

export interface CategoryGallery {
  category: string;
  description: string;
  images: GalleryImage[];
}

export const galleryData: Record<string, CategoryGallery> = {
  'baby-shower': {
    category: 'Baby Shower',
    description: 'Creating joyful baby shower celebrations with elegant themes, thoughtful décor, and seamless arrangements.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1765317270424-923630242acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwY2VsZWJyYXRpb24lMjBwaW5rJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzcyNzAxMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Pink Theme Baby Shower',
        description: 'Elegant pink decorations with beautiful balloon arrangements'
      },
      {
        url: 'https://images.unsplash.com/photo-1672950631329-e93b27d28db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwYmx1ZSUyMGJhbGxvb25zJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3MDExNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Blue Balloon Celebration',
        description: 'Charming blue balloon setup for a memorable baby shower'
      },
      {
        url: 'https://images.unsplash.com/photo-1768725846192-ac92d1e0fa22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwcGFydHklMjB0YWJsZSUyMHNldHVwfGVufDF8fHx8MTc3MjcwMTE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Party Table Setup',
        description: 'Beautifully arranged table with themed decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1765946025847-b2821cc25995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVzc2VydCUyMHRhYmxlfGVufDF8fHx8MTc3MjcwMTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Dessert Table Display',
        description: 'Delightful dessert table with sweet treats and decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1765317269989-0ecf01893b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZmxvcmFsJTIwY2VudGVycGllY2V8ZW58MXx8fHwxNzcyNzAxMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Floral Centerpiece',
        description: 'Stunning floral arrangements as table centerpieces'
      },
      {
        url: 'https://images.unsplash.com/photo-1765946024430-a5c3376d988b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwb3V0ZG9vciUyMGdhcmRlbiUyMHBhcnR5fGVufDF8fHx8MTc3MjcwMTE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Garden Party',
        description: 'Enchanting outdoor baby shower in a garden setting'
      },
      {
        url: 'https://images.unsplash.com/photo-1765317270400-21fdaa0ce8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZ2lmdCUyMHRhYmxlJTIwZGlzcGxheXxlbnwxfHx8fDE3NzI3MDExNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Gift Table Display',
        description: 'Thoughtfully arranged gift display area'
      },
      {
        url: 'https://images.unsplash.com/photo-1768776182359-75ecacc8735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbiUyMGJhbGxvb25zfGVufDF8fHx8MTc3MjMzOTMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Balloon Decoration Arch',
        description: 'Beautiful balloon arch creating a perfect photo backdrop'
      }
    ]
  },
  'birthdays-anniversaries': {
    category: 'Birthdays & Anniversaries',
    description: 'Bringing your special day to life with unique themes, vibrant décor, and unforgettable celebrations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1761253298457-d98f628e1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnMlMjBjZWxlYnJhdGlvbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjcwMTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Colorful Birthday Celebration',
        description: 'Vibrant balloon decorations for a fun birthday party'
      },
      {
        url: 'https://images.unsplash.com/photo-1772615071688-aefb82d82607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjZWxlYnJhdGlvbiUyMGNhbmRsZXMlMjBlbGVnYW50fGVufDF8fHx8MTc3MjcwMTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Birthday Cake',
        description: 'Beautiful birthday cake with candles and elegant presentation'
      },
      {
        url: 'https://images.unsplash.com/photo-1760669346457-8f1d7e26f6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwcm9tYW50aWMlMjBkaW5uZXJ8ZW58MXx8fHwxNzcyNjc3MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Romantic Anniversary Dinner',
        description: 'Intimate anniversary celebration with romantic ambiance'
      },
      {
        url: 'https://images.unsplash.com/photo-1765364816125-83f498c01068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbiUyMHNldHVwJTIwbW9kZXJufGVufDF8fHx8MTc3MjcwMTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Modern Party Setup',
        description: 'Contemporary birthday party decoration setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1763951778440-13af353b122a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNlbGVicmF0aW9uJTIwZnJpZW5kcyUyMHBhcnR5JTIwZnVufGVufDF8fHx8MTc3MjcwMTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Friends Party Celebration',
        description: 'Fun birthday party with friends and vibrant decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1729798997904-d50ef609ac00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwZ29sZCUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc3MjcwMTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Golden Anniversary',
        description: 'Elegant gold-themed anniversary celebration decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1772683530826-78f99de8fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwb3V0ZG9vciUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MjcwMTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Birthday Party',
        description: 'Beautiful outdoor birthday celebration setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMHBhcnR5JTIwZWxlZ2FudCUyMHZlbnVlfGVufDF8fHx8MTc3MjcwMTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Anniversary Venue',
        description: 'Sophisticated venue decoration for anniversary celebration'
      }
    ]
  },
  'dhoti-half-saree': {
    category: 'Dhoti / Half Saree Function',
    description: 'Celebrating traditions with graceful themes, cultural décor, and seamless arrangements for milestone ceremonies.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1768341395921-93a8444e007e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxmJTIwc2FyZWUlMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsJTIwaW5kaWFufGVufDF8fHx8MTc3MjcwMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Traditional Half Saree Ceremony',
        description: 'Beautiful traditional Indian half saree function setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1544718426-17dea2c0b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGRob3RpJTIwY2VyZW1vbnklMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NzI3MDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Dhoti Ceremony Decorations',
        description: 'Elegant traditional decorations for dhoti ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1755844184063-d309fc14458e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGNlbGVicmF0aW9uJTIwc3RhZ2UlMjBmbG9yYWx8ZW58MXx8fHwxNzcyNzAxMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Floral Stage Decoration',
        description: 'Grand stage with beautiful floral arrangements'
      },
      {
        url: 'https://images.unsplash.com/photo-1730352871499-ed779ca9ea43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGZ1bmN0aW9uJTIwbWFyaWdvbGQlMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NzI3MDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Marigold Decorations',
        description: 'Vibrant marigold flower decorations for traditional function'
      },
      {
        url: 'https://images.unsplash.com/photo-1760080839213-87f46cd38a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwY3VsdHVyYWwlMjBldmVudHxlbnwxfHx8fDE3NzI3MDExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Cultural Event Setup',
        description: 'Traditional Indian ceremony with cultural decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1715014036710-e3efa72b29f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNlbGVicmF0aW9uJTIwZWxlZ2FudCUyMHNldHVwfGVufDF8fHx8MTc3MjcwMTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Traditional Setup',
        description: 'Sophisticated setup for traditional celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1741441033653-aaea80f10c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNlcmVtb255JTIwc3RhZ2UlMjBiYWNrZHJvcHxlbnwxfHx8fDE3NzI3MDExNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Stage Backdrop Design',
        description: 'Beautiful stage backdrop for traditional ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1759816660075-31cf3d61c9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGNlbGVicmF0aW9uJTIwZGhvdGl8ZW58MXx8fHwxNzcyMzM5MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Dhoti Ceremony Celebration',
        description: 'Traditional dhoti ceremony with cultural elements'
      }
    ]
  },
  'engagement': {
    category: 'Engagement',
    description: 'Designing elegant engagement celebrations with personalized themes, and seamless coordination for a memorable beginning',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1769527529868-6cf74900c6e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VyZW1vbnklMjBjb3VwbGUlMjByaW5ncyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MjcwMTE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Ring Exchange Ceremony',
        description: 'Beautiful engagement ring ceremony celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1758810742903-535dc084c96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcGFydHklMjBkZWNvcmF0aW9ucyUyMHJvbWFudGljJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzI3MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Romantic Party Decorations',
        description: 'Elegant and romantic engagement party setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1769812343531-cfe6bc93905e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBmbG93ZXJzJTIwY2VudGVycGllY2V8ZW58MXx8fHwxNzcyNzAxMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Floral Centerpieces',
        description: 'Stunning floral arrangements for engagement celebration'
      },
      {
        url: 'https://images.unsplash.com/photo-1762216444265-a675abbb48dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcGFydHklMjBzZXR1cCUyMG91dGRvb3IlMjBnYXJkZW58ZW58MXx8fHwxNzcyNzAxMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Garden Setup',
        description: 'Enchanting outdoor garden engagement party'
      },
      {
        url: 'https://images.unsplash.com/photo-1693862047327-37c809bac5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwcGFydHklMjBsaWdodHMlMjBkZWNvcmF0aW9ucyUyMHJvbWFudGljfGVufDF8fHx8MTc3MjcwMTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Romantic Light Decorations',
        description: 'Magical lighting creating romantic ambiance'
      },
      {
        url: 'https://images.unsplash.com/photo-1770022006699-fd19b7c58244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VyZW1vbnklMjBiYWNrZHJvcCUyMGZsb3JhbCUyMGFyY2h8ZW58MXx8fHwxNzcyNzAxMTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Floral Arch Backdrop',
        description: 'Beautiful floral arch as ceremony backdrop'
      },
      {
        url: 'https://images.unsplash.com/photo-1747115275519-e9b20470ac8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjB2ZW51ZSUyMGRlY29yYXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzcyNzAxMTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Modern Venue Decoration',
        description: 'Contemporary engagement venue with elegant decor'
      },
      {
        url: 'https://images.unsplash.com/photo-1770823916285-f918f2107a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdhZ2VtZW50JTIwY2VsZWJyYXRpb24lMjBjb3VwbGUlMjByaW5nc3xlbnwxfHx8fDE3NzIzMzkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Couple Celebration Moment',
        description: 'Memorable engagement celebration with couple'
      }
    ]
  },
  'haldi': {
    category: 'Haldi',
    description: 'Bright and joyful haldi celebrations with vibrant decor, fun rituals, and seamless coordination.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1771992227105-66eb3c053593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlcmVtb255JTIwdHVybWVyaWMlMjB5ZWxsb3clMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NzI3MDExNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Yellow Theme Haldi',
        description: 'Vibrant yellow decorations with turmeric theme'
      },
      {
        url: 'https://images.unsplash.com/photo-1626774710202-8e5591110581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGZ1bmN0aW9uJTIwbWFyaWdvbGQlMjBmbG93ZXJzJTIweWVsbG93fGVufDF8fHx8MTc3MjcwMTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Marigold Flower Decorations',
        description: 'Beautiful yellow marigold flowers for haldi function'
      },
      {
        url: 'https://images.unsplash.com/photo-1627615951531-cfe7c4628dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWwlMjB2aWJyYW50JTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzcyNzAxMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Vibrant Colorful Celebration',
        description: 'Bright and colorful haldi ceremony decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1720238281730-6247b6d51a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlcmVtb255JTIwb3V0ZG9vciUyMHRyYWRpdGlvbmFsJTIwc2V0dXB8ZW58MXx8fHwxNzcyNzAxMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Traditional Setup',
        description: 'Traditional outdoor haldi ceremony arrangement'
      },
      {
        url: 'https://images.unsplash.com/photo-1645856052484-2e5506e20942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGZ1bmN0aW9uJTIwaW5kaWFuJTIwd2VkZGluZyUyMHllbGxvdyUyMHRoZW1lfGVufDF8fHx8MTc3MjcwMTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Indian Wedding Haldi',
        description: 'Traditional Indian wedding haldi function setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1747041807605-87a31a4b41e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlbGVicmF0aW9uJTIwYnJpZ2h0JTIwZmxvcmFsJTIwZGVjb3J8ZW58MXx8fHwxNzcyNzAxMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Bright Floral Decor',
        description: 'Bright and vibrant floral decorations for haldi'
      },
      {
        url: 'https://images.unsplash.com/photo-1739047598160-b7004af1595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlcmVtb255JTIwdHJhZGl0aW9uYWwlMjBzZWF0aW5nJTIwYXJyYW5nZW1lbnR8ZW58MXx8fHwxNzcyNzAxMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Traditional Seating',
        description: 'Traditional seating arrangement for haldi ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1589463896320-dcb6b7a19854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGZ1bmN0aW9uJTIwam95ZnVsJTIwY2VsZWJyYXRpb24lMjBzZXR1cHxlbnwxfHx8fDE3NzI3MDExNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Joyful Celebration Setup',
        description: 'Joyful and festive haldi celebration decorations'
      }
    ]
  },
  'mehendi': {
    category: 'Mehandi',
    description: 'Colourful and festive mehendi celebrations with creative themes, lively décor, and flawless arrangements.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1712193040516-dd4217fb26ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBjZXJlbW9ueSUyMGhlbm5hJTIwZGVjb3JhdGlvbnMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzI3MDExNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Henna Decorations',
        description: 'Colorful mehendi ceremony with beautiful decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1713463084491-6be1bd8e557a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwZnVuY3Rpb24lMjB2aWJyYW50JTIwdHJhZGl0aW9uYWwlMjBzZXR1cHxlbnwxfHx8fDE3NzI3MDExNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Vibrant Traditional Setup',
        description: 'Traditional mehendi function with vibrant colors'
      },
      {
        url: 'https://images.unsplash.com/photo-1698959050955-4690ca198a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBjZWxlYnJhdGlvbiUyMGNvbG9yZnVsJTIwY3VzaGlvbnMlMjBzZWF0aW5nfGVufDF8fHx8MTc3MjcwMTE4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Colorful Cushion Seating',
        description: 'Comfortable colorful cushion seating for mehendi'
      },
      {
        url: 'https://images.unsplash.com/photo-1749491104418-5a3c5f6be2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwZnVuY3Rpb24lMjBmbG9yYWwlMjBkZWNvcmF0aW9ucyUyMGVsZWdhbnR8ZW58MXx8fHwxNzcyNzAxMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Floral Decorations',
        description: 'Elegant floral arrangements for mehendi function'
      },
      {
        url: 'https://images.unsplash.com/photo-1762708595107-f9c8f956475a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBjZXJlbW9ueSUyMHRyYWRpdGlvbmFsJTIwaW5kaWFuJTIwd2VkZGluZ3xlbnwxfHx8fDE3NzI3MDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Traditional Indian Wedding',
        description: 'Traditional Indian wedding mehendi ceremony setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1762708594060-44b067ddfa2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwY2VsZWJyYXRpb24lMjBicmlnaHQlMjBjb2xvcnMlMjBmZXN0aXZlfGVufDF8fHx8MTc3MjcwMTE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Festive Bright Colors',
        description: 'Festive mehendi celebration with bright colors'
      },
      {
        url: 'https://images.unsplash.com/photo-1595548638675-56086eb71b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhuZGklMjBmdW5jdGlvbiUyMHVtYnJlbGxhJTIwZGVjb3JhdGlvbnMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzI3MDExODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Umbrella Decorations',
        description: 'Colorful umbrella decorations for mehendi function'
      },
      {
        url: 'https://images.unsplash.com/photo-1723272146835-a5f5e3bf68ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWhlbmRpJTIwY2VyZW1vbnklMjBvdXRkb29yJTIwY2VsZWJyYXRpb24lMjBzZXR1cHxlbnwxfHx8fDE3NzI3MDExODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Celebration Setup',
        description: 'Beautiful outdoor mehendi celebration arrangement'
      }
    ]
  },
  'sangeeth-cocktail': {
    category: 'Sangeeth & Cocktail',
    description: 'High-energy sangeet nights with dazzling themes, entertainment, and seamless coordination for a musical celebration.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576941230616-1df1071ff6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nZWV0JTIwbmlnaHQlMjBjZWxlYnJhdGlvbiUyMGRhbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzcyNzAxMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Dance Stage Setup',
        description: 'Energetic sangeet night with dance stage'
      },
      {
        url: 'https://images.unsplash.com/photo-1768949005507-8c0f571285f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwbGlnaHRzJTIwZWxlZ2FudCUyMHZlbnVlfGVufDF8fHx8MTc3MjcwMTE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Cocktail Venue',
        description: 'Sophisticated cocktail party with elegant lighting'
      },
      {
        url: 'https://images.unsplash.com/photo-1627615951531-cfe7c4628dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nZWV0JTIwZnVuY3Rpb24lMjBjb2xvcmZ1bCUyMGRlY29yYXRpb25zJTIwbXVzaWNhbHxlbnwxfHx8fDE3NzI3MDExODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Colorful Musical Decorations',
        description: 'Vibrant sangeet decorations with musical theme'
      },
      {
        url: 'https://images.unsplash.com/photo-1683027922895-8022e129ae08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwZGVjb3JhdGlvbnMlMjBtb2Rlcm4lMjBlbGVnYW50fGVufDF8fHx8MTc3MjcwMTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Modern Cocktail Decorations',
        description: 'Modern and elegant cocktail party setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1765870107155-381b587731c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nZWV0JTIwY2VsZWJyYXRpb24lMjBzdGFnZSUyMGxpZ2h0aW5nJTIwZW50ZXJ0YWlubWVudHxlbnwxfHx8fDE3NzI3MDExODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Stage Lighting Entertainment',
        description: 'Spectacular stage lighting for sangeet entertainment'
      },
      {
        url: 'https://images.unsplash.com/photo-1604766734578-c76b292a316d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwb3V0ZG9vciUyMGV2ZW5pbmclMjBzZXR1cHxlbnwxfHx8fDE3NzI3MDExODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Evening Setup',
        description: 'Beautiful outdoor evening cocktail party'
      },
      {
        url: 'https://images.unsplash.com/photo-1640745684258-147145b12cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5nZWV0JTIwbmlnaHQlMjBpbmRpYW4lMjB3ZWRkaW5nJTIwZGFuY2luZ3xlbnwxfHx8fDE3NzI3MDExODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Indian Wedding Dancing',
        description: 'Lively sangeet night with dancing celebrations'
      },
      {
        url: 'https://images.unsplash.com/photo-1567724066312-8dd87bca051e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHBhcnR5JTIwc2FuZ2VldCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzIzMzkzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Cocktail Party Lights',
        description: 'Dazzling lights for cocktail and sangeet party'
      }
    ]
  },
  'wedding': {
    category: 'Wedding',
    description: 'From décor to rituals, we design and execute weddings with elegance, precision, and unforgettable experiences',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1747115275646-49725fb5a003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBiZWF1dGlmdWwlMjBzdGFnZSUyMGRlY29yYXRpb25zfGVufDF8fHx8MTc3MjcwMTE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Beautiful Stage Decorations',
        description: 'Stunning wedding ceremony stage with elegant decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1763553113332-800519753e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMHRhYmxlJTIwc2V0dXB8ZW58MXx8fHwxNzcyNzAxMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Elegant Reception Tables',
        description: 'Sophisticated wedding reception table setup'
      },
      {
        url: 'https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yJTIwZ2FyZGVuJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzcyNzAxMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Outdoor Garden Ceremony',
        description: 'Beautiful outdoor garden wedding venue'
      },
      {
        url: 'https://images.unsplash.com/photo-1766734865668-0ebd5d60ae92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbnMlMjByb21hbnRpYyUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3MjcwMTE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Romantic Floral Decorations',
        description: 'Romantic wedding with elegant floral arrangements'
      },
      {
        url: 'https://images.unsplash.com/photo-1732382643619-872165f61891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwdHJhZGl0aW9uYWwlMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NzI3MDExOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Traditional Mandap',
        description: 'Traditional Indian wedding mandap with decorations'
      },
      {
        url: 'https://images.unsplash.com/photo-1672798083627-fd72e50df75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwaGFsbCUyMGxpZ2h0aW5nJTIwY2hhbmRlbGllcnN8ZW58MXx8fHwxNzcyNzAxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Reception Hall Lighting',
        description: 'Grand reception hall with chandelier lighting'
      },
      {
        url: 'https://images.unsplash.com/photo-1769230365032-4591a0050fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBhaXNsZSUyMGRlY29yYXRpb25zJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzI3MDExOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Aisle Flower Decorations',
        description: 'Beautiful flower decorations along wedding aisle'
      },
      {
        url: 'https://images.unsplash.com/photo-1769812343915-8af28af437fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZCUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMHN0YWdlfGVufDF8fHx8MTc3MjMzOTMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Grand Ceremony Stage',
        description: 'Magnificent grand wedding ceremony stage setup'
      }
    ]
  }
};
