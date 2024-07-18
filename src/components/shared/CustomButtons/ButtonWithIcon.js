const ButtonWithIcon = ({ children }) => {
  return (
    <button class="text-primary bg-transparent border-none cursor-pointer text-[1.125em] tracking-[0.0275em] transition-all duration-150   group">
      <span class="inline-block relative transition-all duration-400 group-enabled:group-hover:mr-4">
        {children}
        <span class="absolute top-0 right-0 opacity-0 transition-all duration-200 group-enabled:group-hover:opacity-100 group-enabled:group-hover:right-[-1rem] group-enabled:group-active:right-[-1.2rem] after:content-['\00BB']"></span>
      </span>
    </button>
  );
};

export default ButtonWithIcon;
