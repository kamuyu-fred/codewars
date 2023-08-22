def are_you_playing_banjo(name)
    # Implement me!
    if name.downcase.start_with?('r')
      return "#{name} plays banjo" 
    else
      return "#{name} does not play banjo"
    end
    
    return name
  end



